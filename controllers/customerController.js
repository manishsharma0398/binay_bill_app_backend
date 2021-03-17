const CustomerSchema = require("../models/Customer"),
  log = require("fancy-log");

exports.addNewCustomerController = async (req, res) => {
  const newCustomer = {
    name: req.body.name,
    gstNo: req.body.gstNo,
    address: req.body.address,
    mobileNo: req.body.mobileNo,
  };

  try {
    let customer = await CustomerSchema.findOne({
      mobileNo: newCustomer.mobileNo,
    });

    if (!customer) {
      customer = await new CustomerSchema(newCustomer).save();
      res.status(201).json(customer);
    } else {
      res.status(200).json(customer);
    }
  } catch (err) {
    res
      .status(503)
      .json({ error: "Something went wrong. Please try again later" });
  }
};

exports.getCustomerDetails = async (req, res) => {
  try {
    let customer = await CustomerSchema.findOne({
      mobileNo: req.params.id,
    });

    if (!customer) {
      res.status(404).json({ error: "No customer found with this mobile no" });
    } else {
      res.status(200).json(customer);
    }
  } catch (err) {
    log(err);
    res
      .status(503)
      .json({ error: "Something went wrong. Please try again later" });
  }
};
