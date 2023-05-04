import { propertiesList } from "../../mock/data.js";
import { ProductModel } from "../../models/ProductModel.js";

const _propertiesList = [...propertiesList];

export const getAllProperties = async (req, res) => {
  const properties = await ProductModel.find({});

  res.send(JSON.stringify(properties));
};

export const getSingleProperty = async (req, res) => {
  // const id = Number(req.params.id);
  try {
    const property = await ProductModel.findById(req.params.id);

    if (!property) {
      return res.status(404).send("Property not found");
    }

    res.send(property);
  } catch (error) {
    res.status(404).send({error: 'Property with the given Id not found'})
  }
};

export const saveProperty = async (req, res) => {
  const _property = req.body;
  await ProductModel.create(_property);

  res.json({ message: "Data Saved", data: _property });
};

export const deleteProperty = (req, res) => {
  const id = Number(req.params.id);
  const _property = _propertiesList.find((p) => p.id === id);

  const index = _propertiesList.indexOf(_property);

  _propertiesList.splice(index, 1);

  res.send(JSON.stringify({ message: "Property removed" }));
};
