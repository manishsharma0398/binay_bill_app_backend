const express = require("express"),
  router = express.Router(),
  customerContrller = require("../controllers/customerController");

// add new product
router.post("/add", customerContrller.addNewCustomerController);

// get customer details
router.get("/:id", customerContrller.getCustomerDetails);

module.exports = router;
