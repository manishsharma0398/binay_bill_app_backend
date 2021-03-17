const ProductSchema = require("../models/Product"),
  log = require("fancy-log");

exports.addNewProductController = async (req, res) => {
  const newProduct = new ProductSchema({
    name: req.body.name,
    quantity: req.body.quantity,
    unit: req.body.unit,
    price: req.body.price,
  });

  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    res
      .status(503)
      .json({ error: "Something went wrong. Please try again later" });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductSchema.find();
    res.status(200).json(products);
  } catch (err) {
    res
      .status(503)
      .json({ error: "Something went wrong. Please try again later" });
  }
};

exports.getAProduct = async (req, res) => {
  try {
    const product = await ProductSchema.findById({ _id: req.params.id });
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ error: "Product not found" });
  }
};
