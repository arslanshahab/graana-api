import express from "express";
import {
  deleteProperty,
  getAllProperties,
  getSingleProperty,
  saveProperty,
} from "../controllers/PropertiesController/PropertiesController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export const propertiesRoutes = express
  .Router()
  .get("/properties", verifyToken, getAllProperties) // private/authenticated api
  .get("/properties/:id", getSingleProperty)
  .post("/properties", verifyToken, saveProperty)
  .delete("/properties/:id", deleteProperty);
