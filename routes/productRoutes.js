const express = require("express"),
  router = express.Router(),
  log = require("fancy-log"),
  productContrller = require("../controllers/productController");

// add new product
router.post("/add", productContrller.addNewProductController);

// get all products
router.get("/", productContrller.getAllProducts);

// get one product
router.get("/:id", productContrller.getAProduct);

module.exports = router;
