// /controllers/reviewController.js

const Review = require("../models/Review");
const Product = require("../models/Product");
const { successResponse, errorResponse } = require("../utils/response");

exports.addReview = async (req, res) => {
  try {
    const { product, rating, comment } = req.body;

    const productExists = await Product.findById(product);
    if (!productExists) return errorResponse(res, "Product not found", 404);

    const review = new Review({
      user: req.user ? req.user.id : null,
      product,
      rating,
      comment
    });

    await review.save();

    successResponse(res, review, "Review added");
  } catch (err) {
    errorResponse(res, err.message);
  }
};

exports.getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId })
      .populate("user", "name");

    successResponse(res, reviews);
  } catch (err) {
    errorResponse(res, err.message);
  }
};
