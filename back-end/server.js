import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

//connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running!!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id == req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, console.log(`Server running in ${NODE_ENV} at port ${PORT}`));

process.on("SIGINT", () => {
  console.log("Bye bye!");
  process.exit();
});
