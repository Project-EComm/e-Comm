import express from "express";
import {
  registerController,
  loginController,
  testController,
  updateData,
  forgetPassword,
  verifyOtp,
  updatePassword,
  verifyMailOTP,
  verifyOtpEmail,
} from "../controllers/authController.js";

import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//POST
router.post("/register", registerController);

//login -- POST
router.post("/login", loginController);

//test router
router.get("/test", requireSignIn, isAdmin, testController);

//Update Info
router.post("/addUpdate", updateData);

//protected route user auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route admin auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// froget-password
router.post("/forgetPassword", forgetPassword);

// optCheck
router.post("/otpVerify", verifyOtp);

// passwordUpdate
router.post("/passUpdate", updatePassword);

// sendEmailOTP
router.post("/sendEmailOTP", verifyMailOTP);

// verifyEmail
router.post("/verifyOtpEmail", verifyOtpEmail);

export default router;
