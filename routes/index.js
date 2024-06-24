const express = require("express");
const router = express.Router();

router.use("/beneficery", require("./Beneficery"));


module.exports = router;