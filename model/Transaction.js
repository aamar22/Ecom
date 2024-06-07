
import mongoose from "mongoose";
import { Mongoose } from "mongoose";


const TransactionSchema = new mongoose.Schema({
    SenderName: {
        type: String,
        required: [true, "First Name Is Required!"],
        minLength: [3, "First Name Must Contain At Least 3 Characters!"],
    },
    SenderAccountnumber: {
        type: String,
        required: [true, "First Name Is Required!"],
        minLength: [3, "First Name Must Contain At Least 3 Characters!"],
    },
    ReceiverName: {
        type: String,
        required: [true, "Last Name Is Required!"],
        minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
    },
    ReceiverAccountnumber: {
        type: String,
        required: [true, "Last Name Is Required!"],
        minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
    },
    Amount: {
        type: String,

    },
    Paymenttype: {
        type: String,

    },
    status: {
        type: String,
        enum: ["Success", "Failed"],
        default: "Success",
    },
});

export const Transaction = mongoose.model("Transaction", TransactionSchema);