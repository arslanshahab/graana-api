import express from "express";
import {
  deleteProperty,
  getAllProperties,
  getSingleProperty,
  saveProperty,
} from "../controllers/PropertiesController/PropertiesController.js";

export const propertiesRoutes = express
  .Router()
  .get("/properties", getAllProperties)
  .get("/properties/:id", getSingleProperty)
  .post("/properties", saveProperty)
  .delete("/properties/:id", deleteProperty);
