
import mongoose from "mongoose";
import { Mongoose } from "mongoose";


const AdminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name Is Required!"],
    minLength: [3, "First Name Must Contain At Least 3 Characters!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name Is Required!"],
    minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  Password: {
    type: String,
    required: [true, "Email Is Required!"],
    validate: [validator.isEmail, "Provide A Valid Email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone Is Required!"],
    minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
  },

  EMPID: {
    type: String,
  
  },
  gender: {
    type: String,
    required: [true, "Gender Is Required!"],
    enum: ["Male", "Female"],
  },

  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
});

export const Admin = mongoose.model("Admin", AdminSchema);