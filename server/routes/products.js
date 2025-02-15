const { Category } = require("../models/category");
const { Product } = require("../models/products");
const express = require("express");
const router = express.Router();
const { default: pLimit } = require("p-limit");
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
});
router.get("/", async (req, res) => {
  const productList = await Product.find().populate("category");

  if (!productList) {
    res.status(500).json({ success: false });
  }
  res.send(productList);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res
      .status(500)
      .json({ message: "The product with the given ID was not found" });
  }
  return res.status(200).send(product);
});

router.post("/create", async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(404).json("Invalid Category");
  }
  const limit = pLimit(2);
  const imageToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    });
  });

  const uploadStatus = await Promise.all(imageToUpload);

  const imgUrl = uploadStatus.map((image) => {
    return image.secure_url;
  });

  if (!uploadStatus) {
    return res.status(500).json({
      error: "Images cannot be uploaded.",
      status: false,
    });
  }

  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    images: imgUrl,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    isFeatured: req.body.isFeatured,
  });
  product = await product.save();
  if (!product) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }
  res.status(200).json(product);
});

router.delete("/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);

  if (!deletedProduct) {
    res.status(404).json({
      message: "The Product with the given ID was not found",
      success: false,
    });
  }
  return res.status(200).send({
    success: true,
    message: "The product with the given ID was deleted successfully",
  });
});

router.put("/:id", async (req, res) => {
  const limit = pLimit(2);
  const imageToUpload = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    });
  });

  const uploadStatus = await Promise.all(imageToUpload);

  const imgUrl = uploadStatus.map((image) => {
    return image.secure_url;
  });

  if (!uploadStatus) {
    return res.status(500).json({
      error: "Images cannot be uploaded.",
      status: false,
    });
  }
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      images: imgUrl,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      rating: req.body.rating,
      numReviews: req.body.numReviews,
      isFeatured: req.body.isFeatured,
    },
    { new: true }
  );
  if (!product) {
    return res.status(500).json({
      message: "Product not updated",
      success: false,
    });
  }
  res.send(product);
});

module.exports = router;
