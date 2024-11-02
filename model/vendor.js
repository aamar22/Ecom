
import mongoose from "mongoose";



const vendorSchema = new mongoose.Schema({

  vendorID: {
    type: String,
    required: [true, "pan Is Required!"],

 },
 
 Companyname: {
    type: String,
    required: [true, "First Name Is Required!"],
    minLength: [3, "First Name Must Contain At Least 3 Characters!"],
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


  Panno: {
    type: String,
    required: [true, "pan Is Required!"],
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

  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const customer = mongoose.model("vendor", vendorSchema);