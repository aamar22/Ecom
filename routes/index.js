const express = require("express");
const router = express.Router();

router.use("/beneficery", require("./Beneficery"));
router.use("/transaction", require("./Transaction"));

module.exports = router;