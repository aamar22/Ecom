const transaction = require("../controller/transaction");

const express = require("express");
const router = express.Router();



router.get("/getAll", transaction.getAll);
router.post("/add", transaction.add);

module.exports = router;