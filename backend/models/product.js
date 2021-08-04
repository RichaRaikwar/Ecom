let mongoose = require("mongoose");

// Product Schema
const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

module.exports = { Product };
