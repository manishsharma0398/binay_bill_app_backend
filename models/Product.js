const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const Product = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Product", Product);
