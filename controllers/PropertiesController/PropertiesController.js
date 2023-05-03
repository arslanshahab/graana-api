import { propertiesList } from "../../mock/data.js";

const _propertiesList = [...propertiesList];

export const getAllProperties = (req, res) => {
  res.send(JSON.stringify(_propertiesList));
};

export const getSingleProperty = (req, res) => {
  const id = Number(req.params.id);
  const property = _propertiesList.find((p) => p.id === id);

  if (!property) {
    return res.status(404).send("Property not found");
  }

  res.send(JSON.stringify(property));
};

export const saveProperty = (req, res) => {
  const _property = req.body;
  _propertiesList.push(_property);

  res.send(JSON.stringify({ message: "Data Saved" }));
};

export const deleteProperty = (req, res) => {
  const id = Number(req.params.id);
  const _property = _propertiesList.find((p) => p.id === id);

  const index = _propertiesList.indexOf(_property);

  _propertiesList.splice(index, 1);

  res.send(JSON.stringify({ message: "Property removed" }));
};
