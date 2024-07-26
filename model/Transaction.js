
const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
       
    },
    ifsc: {
        type: String,
       
    },
    beneficiaryName: {
        type: String,
      
    },
    amount: {
        type: String,
      
    },
    Amount: {
        type: String,

    },
 
    status: {
        type: String,
        enum: ["Pending","Success", "Failed"],
        default: "Pending",
    },
},
{ timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);


module.exports = Transaction;