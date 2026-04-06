import mongoose from "mongoose";
const productReview = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      set: (value) => value.trim(),
    },
    rating: {
      type: Number,
      required: true,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
      set: (value) => value.trim(),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true },
);
const Review = mongoose.model("Review", productReview);
export default Review;
