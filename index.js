import http from "http";
import express from "express";

const app = express();

app.use(express.json()); // to parse body in requests

const propertiesList = [
  {
    id: 1,
    name: "Islamabad",
    area_image:
      "https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1538580064%2Fax22at6n4jzc01f27r3m.jpg&w=640&q=75",
    area_name: "F-17",
    properties_for_rent: 290,
    properties_for_sales: 590,
    cityId: 1,
  },
  {
    id: 2,
    name: "Islamabad",
    area_image:
      "https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1538580064%2Fax22at6n4jzc01f27r3m.jpg&w=640&q=75",
    area_name: "F-17",
    properties_for_rent: 3950,
    properties_for_sales: 5590,
    cityId: 1,
  },
  {
    id: 3,
    name: "Lahore New",
    area_image:
      "https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1538580064%2Fax22at6n4jzc01f27r3m.jpg&w=640&q=75",
    area_name: "G-21",
    properties_for_rent: 390,
    properties_for_sales: 5950,
    cityId: 2,
  },
  {
    id: 4,
    name: "Islamabad",
    area_image:
      "https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1538580064%2Fax22at6n4jzc01f27r3m.jpg&w=640&q=75",
    area_name: "H-08",
    properties_for_rent: 39430,
    properties_for_sales: 594330,
    cityId: 3,
  },
  {
    id: 5,
    name: "Islamabad",
    area_image:
      "https://www.graana.com/_next/image/?url=http%3A%2F%2Fres.cloudinary.com%2Fgraanacom%2Fimage%2Fupload%2Fv1538580064%2Fax22at6n4jzc01f27r3m.jpg&w=640&q=75",
    area_name: "F-17",
    properties_for_rent: 39430,
    properties_for_sales: 5943301,
    cityId: 4,
  },
];

app.get("/properties", (req, res) => {
  res.send(JSON.stringify(propertiesList));
});

app.get("/properties/:id", (req, res) => {
  const id = Number(req.params.id);
  const property = propertiesList.find((p) => p.id === id);

  if (!property) {
    return res.status(404).send("Property not found");
  }

  res.send(JSON.stringify(property));
});

app.post("/properties", (req, res) => {
  const _property = req.body;
  propertiesList.push(_property);

  res.send(JSON.stringify({ message: "Data Saved" }));
});

app.delete("/properties/:id", (req, res) => {
  const id = Number(req.params.id);
  const _property = propertiesList.find((p) => p.id === id);

  const index = propertiesList.indexOf(_property);

  propertiesList.splice(index, 1);

  res.send(JSON.stringify({ message: "Property removed" }));
});

app.listen(4000);

console.log("Server listening on port: 4000");
