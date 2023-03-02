import express from "express";

const app = express();

let customers = [
  { id: 1, name: "Alehandro", idade: 18 },
  { id: 2, name: "Luan", idade: 18 },
  { id: 3, name: "Yuri", idade: 19 },
];

app.get("/customers", (req, res) => {
  return res.json(customers);
});

app.get("/customers/:id", (req, res) => {
  const id = req.params.id;
  const customer = customers.find((i) => i.id == id);
  const status = customer ? 200 : 404;

  console.log("GET :: /customers/:id", customer);

  return res.status(status).json(customer);
});

app.post("/customers", (req, res) => {
  const { name, idade } = req.body;
  const id = customers[customers.length - 1].id + 1;

  const newCustomer = { id, name, idade };

  customers.push(newCustomer);

  return res.status(201).json(newCustomer);
});

app.put("/customer/:id", (req, res) => {
  const id = req.params.id;
  const { name, idade } = req.body;

  const index = customers.findIndex((i) => i.id == id);
  const status = index >= 0 ? 200 : 404;

  if (index >= 0) {
    customers[index] = { id: parseInt(id), name, idade: parseInt(idade) };
  }

  return res.status(status).json(customers[index]);
});

app.delete("customer/:id", (req, res) => {
  const id = req.params.id;
  const customer = customers.find((i) => i.id == id);
  const status = customer >= 0 ? 200 : 404;

  if (customer >= 0) {
    customers.splice(customer, 1);
  }

  return res.status(status).json();
});

app.listen(3000);
