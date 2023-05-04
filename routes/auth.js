import express from "express";
import { registerUser } from "../controllers/AuthController/AuthController.js";

export const propertiesRoutes = express
  .Router()
  .post("/login", loginUser)
  .post("/register", registerUser);
