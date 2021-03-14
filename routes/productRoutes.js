const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  console.log("showing all products");
  res.json({ success: "showing all products" });
});

router.get("/:id", (req, res) => {
  console.log("showing one product");
  console.log(res.params);
  res.json({ success: "showing one product" });
});

module.exports = router;
