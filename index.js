import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { authRoutes, propertiesRoutes, userRoutes } from "./routes/index.js";

const app = express();
dotenv.config();
app.use(express.json()); // to parse body in requests

mongoose.connect("mongodb://localhost:27017/graana-db");

mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});

mongoose.connection.on("error", () => {
  console.log("Something wrong with the DB connection");
});

app.use("/", propertiesRoutes);
app.use("/", userRoutes);
app.use("/", authRoutes);

app.listen(4000);

console.log("Server listening on port: 4000");
