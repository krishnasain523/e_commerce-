import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      set: (value) => value.trim(),
    },
    category: {
      type: String,
      enum: ["Sports equipment", "Sports wear", "Sports shoes"],
      required: true,
      set: (value) => value.trim(),
    },
    description: {
      type: String,
      required: true,
      set: (value) => value.trim(),
    },
    price: {
      type: Number,
      required: true,
      get: (value) => `${value} Rs`,
    },
    discount: {
      type: Number,
      default: 0,
      get: (value) => `${value} %`,
    },
    image: {
      type: String,
      required: true,
      set: (value) => value.trim(),
    },
    stock: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true },
);
const Product = mongoose.model("Product", productSchema);
export default Product;
