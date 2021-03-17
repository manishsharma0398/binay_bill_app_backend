const CustomerSchema = require("../models/Customer"),
  log = require("fancy-log");

exports.addNewCustomerController = async (req, res) => {
  const newCustomer = new CustomerSchema({
    name: req.body.name,
    gstNo: req.body.gstNo,
    address: req.body.address,
    mobileNo: req.body.mobileNo,
  });

  try {
    product = await newCustomer.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};
