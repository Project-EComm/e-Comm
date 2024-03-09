import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import axios from "axios";
// nodemailer
import nodeMailer from "nodemailer";
import randonString from "randomstring";

export const registerController = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      phoneNumber,
      countrycode,
      address,
    } = req.body;

    // Check if user exists
    const existingUser = await userModel.findOne({ email });

    // If user or phone number exists, return an error response
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User is already registered",
      });
    }

    // Validation
    if (
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !phoneNumber ||
      !countrycode
    ) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    // Register User
    const hashedPassword = await hashPassword(password);

    const newUser = await new userModel({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      phoneNumber,
      countrycode,
    }).save();

    // Send a success response
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};

// login post
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //tocken
    const tocken = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login SuccessFull",
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        countrycode: user.countrycode,
        phoneNumber: user.phoneNumber,
        address: user.address,
        pincode: user.pincode,
        verifiedPhoneNumber: user.verifiedPhoneNumber,
        verifiedEmail: user.verifiedEmail,
        city: user.city,
        role: user.role,
        pic: user.pic,
      },
      tocken,
    });
    console.log(user.address);
  } catch (error) {
    console.warn(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// testController

export const testController = async (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "You are Admin",
    });
  } catch (error) {
    console.warn("Your are not a Admin", error);
    res.status(401).send({
      success: false,
      message: "You are not a Admin",
    });
  }
};

// UpdateData
export const updateData = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phoneNumber,
      countrycode,
      address,
      verifiedPhoneNumber,
      verifiedEmail,
      email,
      pincode,
      city,
    } = req.body;

    // Check if user exists
    const existingUser = await userModel.findOne({ email });

    // If user exists, update the user document
    if (existingUser) {
      // Update all fields in the existing user document
      await userModel.findOneAndUpdate(
        { email },
        {
          email,
          first_name,
          last_name,
          phoneNumber,
          verifiedPhoneNumber,
          verifiedEmail,
          countrycode,
          address,
          pincode,
          city,
        }
      );

      res.status(200).send({
        success: true,
        message: "User information updated successfully",
      });
    } else {
      // If user does not exist, return an error response
      res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error updating user information",
      error: error.message,
    });
  }
};

// emailConfig

const emailConfig = async (name, email, otp) => {
  try {
    let transporter = await nodeMailer.createTransport({
      service: "gmail",
      requireTLS: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `Password Reset - ApkaBazzar`,
      html: `
        <html>
          <head>
            <style>
              /* Add your custom styles here */
              body {
                background-color: #f0f0f0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              p {
                color: #555555;
              }
              .otp {
                font-weight: bold;
                display: inline-block;
                width: 80px;
                text-align: center;
                background-color: #204969;
                color: white;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2 class="title">Password Reset - ApkaBazzar</h2>
              <p>Hello ${name},</p>
              <p>We received a request to reset your password. Please use the following OTP to reset your password:</p>
              <h3>Your OTP is: <strong class="otp">${otp}</strong></h3>
              <p>If you did not request a password reset, please ignore this email.</p>
              <p>Thank you,<br>ApkaBazzar Team</p>
            </div>
          </body>
        </html>
      `, // You can customize the email content here
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        throw new Error("Email not sent. Server error.");
      } else {
        console.log("Email sent: " + info.response);
        return `${info.response} , check your email`;
      }
    });
  } catch (error) {
    console.error(error);
    throw new Error("Server Error");
  }
};

// forgetPassword

export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body; // Assuming you are extracting the email from the request body

    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return res
        .status(200)
        .json({ success: false, message: "User Not Registered" });
    }

    const otp = randonString.generate({ length: 6, charset: "numeric" }); // Generate a 6-digit numeric OTP

    const otpExpiry = new Date();
    otpExpiry.setMinutes(otpExpiry.getMinutes() + 1); // Set expiration time to 1 minute from now

    await userModel.findOneAndUpdate({ email }, { $set: { otp, otpExpiry } });

    const name = existingUser.first_name + " " + existingUser.last_name;
    emailConfig(name, existingUser.email, otp);

    return res.status(200).json({
      success: true,
      message: "Please check your mail, OTP sent",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// verify otp

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find the user based on the email and OTP
    const user = await userModel.findOne({ email, otp });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found with provided email and OTP" });
    }

    // Check if the OTP is not expired
    const currentTimestamp = new Date();
    const otpExpiryTimestamp = new Date(user.otpExpiry);

    if (currentTimestamp > otpExpiryTimestamp) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    // Perform any other verification logic here...

    // Update user verification status or perform other actions...

    return res.status(200).json({ message: "OTP verification successful" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// passwordUpdate
export const updatePassword = async (req, res) => {
  try {
    console.log("Update Password Request Received");
    const { password, email } = req.body;

    // Check if user exists
    const existingUser = await userModel.findOne({ email });
    // If user exists, update the user document
    if (existingUser) {
      // Update all fields in the existing user document

      const hashedPassword = await hashPassword(password);
      await userModel.findOneAndUpdate(
        { email },
        {
          password: hashedPassword,
        }
      );

      res.status(200).send({
        success: true,
        message: "Password updated successfully",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error updating Password",
      error: error.message,
    });
  }
};

// emailConfig

const emailConfigMail = async (name, email, otp) => {
  try {
    let transporter = await nodeMailer.createTransport({
      service: "gmail",
      requireTLS: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `Email Verification - ApkaBazzar`,
      html: `
        <html>
          <head>
            <style>
              /* Add your custom styles here */
              body {
                background-color: #f0f0f0;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              p {
                color: #555555;
              }
              .otp {
                font-weight: bold;
                display: inline-block;
                width: 80px;
                text-align: center;
                background-color: #204969;
                color: white;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2 class="title">Email Verification - ApkaBazzar</h2>
              <p>Hello ${name},</p>
              <p>We received a request to virify your Email. Please use the following OTP to verify your email:</p>
              <h3>Your OTP is: <strong class="otp">${otp}</strong></h3>
              <p>If you did not request a Email verification, please ignore this email.</p>
              <p>Thank you,<br>ApkaBazzar Team</p>
            </div>
          </body>
        </html>
      `, // You can customize the email content here
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        throw new Error("Email not sent. Server error.");
      } else {
        console.log("Email sent: " + info.response);
        return `${info.response} , check your email`;
      }
    });
  } catch (error) {
    console.error(error);
    throw new Error("Server Error");
  }
};

// emailVerify

export const verifyMailOTP = async (req, res) => {
  try {
    const { email } = req.body; // Assuming you are extracting the email from the request body

    const existingUser = await userModel.findOne({ email });

    const otp = randonString.generate({ length: 6, charset: "numeric" }); // Generate a 6-digit numeric OTP

    const otpExpiry = new Date();
    otpExpiry.setMinutes(otpExpiry.getMinutes() + 1); // Set expiration time to 1 minute from now

    await userModel.findOneAndUpdate({ email }, { $set: { otp, otpExpiry } });

    const name = existingUser.first_name + " " + existingUser.last_name;
    emailConfigMail(name, existingUser.email, otp);

    return res.status(200).json({
      success: true,
      message: "Please check your mail, OTP sent",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// verify otpEmial

export const verifyOtpEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find the user based on the email and OTP
    const user = await userModel.findOne({ otp });

    if (!user) {
      return res.status(404).json({ message: "OTP not found" });
    }

    // Check if the OTP is not expired
    const currentTimestamp = new Date();
    const otpExpiryTimestamp = new Date(user.otpExpiry);

    if (currentTimestamp > otpExpiryTimestamp) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    // Perform any other verification logic here...

    // Update user verification status or perform other actions...
    user.verifiedEmail = true;
    await user.save();
    return res.status(200).json({ message: "OTP verification successful" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
