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
    product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductSchema.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

exports.getAProduct = async (req, res) => {
  try {
    const product = await ProductSchema.findById({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ error: "Product not found" });
  }
};
