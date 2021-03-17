require("dotenv").config();

const express = require("express"),
  app = express(),
  path = require("path"),
  port = process.env.PORT || 3080,
  mongoose = require("mongoose"),
  log = require("fancy-log");

// parse application/x-www-form-urlencoded
// app.use(express.urlencoded());

// parse application/json
app.use(express.json());

app.use(express.static(path.join(__dirname, "../my-app/build")));

// routes
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");

app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);

app.listen(port, () => {
  log(`Server listening on the port::${port}`);
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eir4t.mongodb.net/binay_bill_app?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../my-app/build/index.html"));
// });
