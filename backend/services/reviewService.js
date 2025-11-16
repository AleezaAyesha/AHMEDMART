// services/reviewService.js
const Review = require("../models/Review");

exports.addReview = async (userId, productId, rating, comment) => {
  const newReview = new Review({
    userId,
    productId,
    rating,
    comment,
  });
  await newReview.save();
  return newReview;
};

exports.getProductReviews = async (productId) => {
  return await Review.find({ productId }).populate("userId", "name email");
};

exports.getUserReviews = async (userId) => {
  return await Review.find({ userId }).populate("productId", "name");
};
