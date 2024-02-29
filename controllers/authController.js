import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

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
        city: user.city,
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
          first_name,
          last_name,
          phoneNumber,
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
