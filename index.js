import express from "express";
import { propertiesRoutes, userRoutes } from "./routes/index.js";

const app = express();

app.use(express.json()); // to parse body in requests

app.use('/', propertiesRoutes)
app.use('/', userRoutes)

app.listen(4000);

console.log("Server listening on port: 4000");
