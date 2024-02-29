import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
    },
    countrycode: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
      default: "",
      trim: true,
    },
    pincode: {
      type: Number,
      default: null,
    },
    city: {
      type: String,
      default: "",
    },
    pic: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
