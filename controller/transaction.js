const Transaction = require('../model/Transaction');




// Create a new transaction
// Create a new transaction
exports.add = async function (req, res) {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all transactions
exports.getAll = async function (req, res) {
    try {
        const transaction = await Transaction.find();
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};