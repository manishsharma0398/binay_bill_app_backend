const express = require("express"),
  router = express.Router(),
  log = require("fancy-log"),
  customerContrller = require("../controllers/customerController");

// add new product
router.post("/add", customerContrller.addNewCustomerController);

// // get all products
// router.get("/", productContrller.getAllProducts);

// // get one product
// router.get("/:id", productContrller.getAProduct);

module.exports = router;
