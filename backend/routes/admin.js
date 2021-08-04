const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
require("dotenv").config();

const { Product } = require("../models/product");

// Get All Products
router.get("/api/products", (req, res) => {
  Product.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});


// Get Single Product 
router.get("/api/product/:id", (req, res) => {
  Product.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});


// Save Product
router.post("/api/product/add", (req, res) => {
  const emp = new Product({
    name: req.body.name,
    info: req.body.info,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    discount: req.body.discount,
    imgUrl: req.body.imgUrl,
  });
  emp.save((err, data) => {
    if (!err) {
      // res.send(data);
      res
        .status(200)
        .json({
          code: 200,
          message: "Product Added Successfully",
          addProduct: data,
        });
    } else {
      console.log(err);
    }
  });
});

// Update Product

router.put("/api/product/update/:id", (req, res) => {
  const emp = {
    name: req.body.name,
    info: req.body.info,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    discount: req.body.discount,
    imgUrl: req.body.imgUrl,
  };
  Product.findByIdAndUpdate(
    req.params.id,
    { $set: emp },
    { new: true },
    (err, data) => {
      if (!err) {
        res
          .status(200)
          .json({
            code: 200,
            message: "Product Updated Successfully",
            updateProduct: data,
          });
      } else {
        console.log(err);
      }
    }
  );
});

// Delete Product
router.delete("/api/product/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      // res.send(data);
      res
        .status(200)
        .json({ code: 200, message: "Product deleted", deleteProduct: data });
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
