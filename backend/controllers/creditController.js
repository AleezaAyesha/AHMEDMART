// /controllers/creditController.js

const Credit = require("../models/Credit");
const { successResponse, errorResponse } = require("../utils/response");

exports.depositCredit = async (req, res) => {
  try {
    const { amount } = req.body;

    const credit = new Credit({
      user: req.user.id,
      amount,
      transactionType: "deposit",
    });

    await credit.save();

    successResponse(res, credit, "Credit deposited");
  } catch (err) {
    errorResponse(res, err.message);
  }
};

exports.withdrawCredit = async (req, res) => {
  try {
    const { amount } = req.body;

    const credit = new Credit({
      user: req.user.id,
      amount,
      transactionType: "withdrawal",
    });

    await credit.save();

    successResponse(res, credit, "Credit withdrawn");
  } catch (err) {
    errorResponse(res, err.message);
  }
};

exports.getBalance = async (req, res) => {
  try {
    const credits = await Credit.find({ user: req.user.id });

    let balance = 0;

    credits.forEach((entry) => {
      balance += entry.transactionType === "deposit" ? entry.amount : -entry.amount;
    });

    successResponse(res, { balance });
  } catch (err) {
    errorResponse(res, err.message);
  }
};
