const express = require("express"),
  app = express();

//   routes
const productRoutes = require("./routes/productRoutes");

const path = require("path"),
  bodyParser = require("body-parser");
port = 3080;

var log = require("fancy-log");

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../my-app/build")));

// app.get("/api/users", (req, res) => {
//   log("api/users called!");
//   res.json(users);
// });

// app.post("/api/user", (req, res) => {
//   const user = req.body.user;
//   log("Adding user:::::", user);
//   users.push(user);
//   res.json("user addedd");
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../my-app/build/index.html"));
// });

app.use("/api/products", productRoutes);

app.listen(port, () => {
  log(`Server listening on the port::${port}`);
});
