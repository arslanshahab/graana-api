import express from "express";
import { propertiesList } from "../mock/data.js";

export const userRoutes = express
  .Router()
  .get("/users", (req, res) => {
    res.send(JSON.stringify(propertiesList));
  })
  .get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const property = propertiesList.find((p) => p.id === id);

    if (!property) {
      return res.status(404).send("Property not found");
    }

    res.send(JSON.stringify(property));
  })
  .post("/users", (req, res) => {
    const _property = req.body;
    propertiesList.push(_property);

    res.send(JSON.stringify({ message: "Data Saved" }));
  })
  .delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const _property = propertiesList.find((p) => p.id === id);

    const index = propertiesList.indexOf(_property);

    propertiesList.splice(index, 1);

    res.send(JSON.stringify({ message: "Property removed" }));
  });
