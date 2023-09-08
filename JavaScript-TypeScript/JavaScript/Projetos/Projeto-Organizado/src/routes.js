import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import auth from "./app/middlewares/auth";

import customers from "./app/controllers/CustomersController";
import contacts from "./app/controllers/ContactsController";
import users from "./app/controllers/UsersController";
import sessions from "./app/controllers/SessionsController";
import files from "./app/controllers/FilesController";

const routes = new Router();
const upload = multer(multerConfig);

// Sessions
routes.post("/sessions", sessions.create);

// User
routes.post("/user", users.create);

// Auth (Controla o acesso as Rotas `Middleware`)
routes.use(auth);

// Customers
routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers/:id", customers.create);
routes.put("customers/:id", customers.update);
routes.delete("customers/:id", customers.destroy);

// Contacts
routes.get("/customers/:customerId/contacts", contacts.index);
routes.get("/customers/:customerId/contacts/:id", contacts.show);
routes.post("/customers/:customerId/contacts", contacts.create);
routes.put("customers/:customerId/contacts/:id", contacts.update);
routes.delete("customers/:customerId/contacts/:id", contacts.destroy);

// Users
routes.get("/user", users.index);
routes.get("/user/:id", users.show);
routes.put("/user/:id", users.update);
routes.delete("/user/:id", users.destroy);

// Files
routes.post("/files", upload.single("file"), files.create);

export default routes;
