const Beneficiary = require('../model/Benefeicery');

// Create a new transaction
exports.add = async function (req, res) {
    try {
        const beneficiary = new Beneficiary(req.body);
        await beneficiary.save();
        res.status(201).json(beneficiary);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all transactions
exports.getAll = async function (req, res) {
    try {
        const dataBeneficiary = await Beneficiary.find();
        res.status(200).json(dataBeneficiary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};