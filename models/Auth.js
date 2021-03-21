const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const AuthModel = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateTime: { type: Date, default: Date.now, required: true },
});

module.exports = mongoose.model("Auth", AuthModel);
