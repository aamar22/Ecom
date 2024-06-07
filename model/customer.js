
import mongoose from "mongoose";
import { Mongoose } from "mongoose";


const customerSchema = new mongoose.Schema({
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
  AccountNumber: {
    type: String,
  },

  dob: {
    type: Date,
    required: [true, "DOB Is Required!"],
  },
  gender: {
    type: String,
    required: [true, "Gender Is Required!"],
    enum: ["Male", "Female"],
  },
  Panno: {
    type: String,
    required: [true, "Appointment Date Is Required!"],
  },
  Accountbalance: {
    type: String,
    required: [true, "Department Name Is Required!"],
  },
  Accountbalance: {
    type: String,
   
  },
  previousbalance:{
    type: String,
   
  },
  address: {
    type: String,
    required: [true, "Address Is Required!"],
  },

  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const customer = mongoose.model("customer", customerSchema);