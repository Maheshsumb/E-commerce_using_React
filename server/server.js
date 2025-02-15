const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.options("*", cors());

//middleware
app.use(bodyParser.json());

//Routes
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/products");

app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);

// Database Connection
mongoose
  .connect(process.env.CONNECTION_STRING, {
    ssl: true,
    tlsAllowInvalidCertificates: false,
  })
  .then(() => {
    console.log("Database connection established");
    // Server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
