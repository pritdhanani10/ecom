import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import nodemailer from "nodemailer";

// Function for creating token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Controller function for user Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" }); // Fixed typo 'messge' to 'message'
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Controller function for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" }); // Fixed typo 'messge' to 'message'
    }
    // validate password and checking password strength
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enetr a strong password",
      });
    }

    // Validate mobile number
    if (!validator.isMobilePhone(number, "any", { strictMode: false })) {
      return res.json({
        success: false,
        message: "Please enter a valid mobile number",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
      number: number, // Include number in user data
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Controller function for user  Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS){
      const token = jwt.sign(email + password, process.env.JWT_SECRET)
      res.json({ success: true, token })
    } else {
      res.json({ success: false, message: "Invalid Credentials"})
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Controller function to fetch all users (Admin only)
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}, "-password"); // Exclude password field
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
};

const deleteUser = async (req, res) => {
  try {
    // const { id } = req.params;
    await userModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to delete user" });
  }
};
// Generate a random 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: true
  },
  maxConnections: 5,
  maxMessages: 10,
  pool: true,
  rateDelta: 1000,
  rateLimit: 5
});

// Verify transporter connection
transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to send emails');
  }
});
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.json({ success: false, message: "Email is required" });
    }

    const user = await userModel.findOne({ email });
    
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const otp = String(generateOTP());
    
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Password Reset OTP',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Password Reset OTP</h2>
          <p>Your OTP for password reset is:</p>
          <h1 style="color: #007bff; font-size: 32px; letter-spacing: 5px;">${otp}</h1>
          <p>This OTP will expire in 10 minutes.</p>
          <p>If you didn't request this password reset, please ignore this email.</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    
    // Save OTP to user document
    user.resetOTP = otp;
    user.otpExpiry = Date.now() + 600000; // 10 minutes expiry
    await user.save();

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error('Email error details:', {
      error: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command
    });
    res.json({ success: false, message: `Failed to send OTP: ${error.message}` });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await userModel.findOne({ email });

    if (!user || user.resetOTP !== otp || user.otpExpiry < Date.now()) {
      return res.json({ success: false, message: "Invalid or expired OTP" });
    }

    res.json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Move all exports to the end of the file
export {
  loginUser,
  registerUser,
  adminLogin,
  getAllUsers,
  deleteUser,
  forgotPassword,
  verifyOTP,
  resetPassword
};
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const user = await userModel.findOne({ email });

    if (!user || user.resetOTP !== otp || user.otpExpiry < Date.now()) {
      return res.json({ success: false, message: "Invalid or expired OTP" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetOTP = null;
    user.otpExpiry = null;
    await user.save();

    res.json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
