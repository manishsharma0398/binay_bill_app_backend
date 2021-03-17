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
    }

    res.json(customer);
  } catch (error) {
    log(error);
  }
};
