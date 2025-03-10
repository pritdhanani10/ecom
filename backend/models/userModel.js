import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    number: { type: String, required: true },
    cartData: { type: Object, default: {} },
    resetOTP: { type: String },
    otpExpiry: { type: Date },
    resetOTP: { type: String }, 
    otpExpiry: { type: Number },
  },
  { minimize: false }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;