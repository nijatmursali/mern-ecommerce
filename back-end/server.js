import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running!!");
});

app.use("/api/products", productRoutes);

console.log(process.env.PORT);
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.listen(PORT, console.log(`Server running in ${NODE_ENV} at port ${PORT}`));

process.on("SIGINT", () => {
  console.log("Bye bye!");
  process.exit();
});
