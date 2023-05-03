import express from "express";
import { propertiesRoutes, userRoutes } from "./routes/index.js";
import mongoose from "mongoose";

const app = express();
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

app.listen(4000);

console.log("Server listening on port: 4000");
