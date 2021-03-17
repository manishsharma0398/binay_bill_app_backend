const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const Customer = new Schema({
  name: { type: String, required: true },
  gstNo: { type: String },
  address: { type: String, required: true },
  mobileNo: { type: String, required: true, minLength: 10, maxLength: 10 },
  dateTime: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("Customer", Customer);
