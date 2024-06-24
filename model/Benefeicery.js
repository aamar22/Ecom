const mongoose = require('mongoose');

const beneficiarySchema = new mongoose.Schema({
    accountNumber: { type: String, required: true },
    ifsc: { type: String, required: true },
    beneficiaryName: { type: String, required: true }
});

const Beneficiary = mongoose.model('Beneficiary', beneficiarySchema);

module.exports = Beneficiary;