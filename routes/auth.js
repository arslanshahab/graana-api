import express from "express";
import { loginUser, registerUser } from "../controllers/AuthController/AuthController.js";

export const authRoutes = express
  .Router()
  .post("/login", loginUser)
  .post("/register", registerUser);
