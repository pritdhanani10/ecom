import express from "express";
import {
  adminLogin,
  loginUser,
  registerUser,
  getAllUsers,
  deleteUser,
  forgotPassword, verifyOTP, resetPassword
} from "../controllers/userController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

userRouter.get("/all", authUser, getAllUsers);
userRouter.post("/delete", authUser, deleteUser);

userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/verify-otp", verifyOTP);
userRouter.post("/reset-password", resetPassword);

export default userRouter;