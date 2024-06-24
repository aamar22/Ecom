const bene = require("../controller/beneficery");

const express = require("express");
const router = express.Router();



router.get("/getAll", bene.getAll);
router.post("/add", bene.add);

module.exports = router;