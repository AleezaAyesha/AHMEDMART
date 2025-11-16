// /routes/creditRoutes.js

const express = require("express");
const router = express.Router();
const { depositCredit, withdrawCredit, getBalance } = require("../controllers/creditController");

router.post("/deposit", depositCredit);
router.post("/withdraw", withdrawCredit);
router.get("/balance", getBalance);

module.exports = router;
