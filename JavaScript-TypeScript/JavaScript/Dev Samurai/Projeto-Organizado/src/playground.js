import { Op } from "sequelize";
import "./database";

import Customer from "./app/models/Customer";
import Contact from "./app/models/Contact";

class Playground {
  static async play() {
    // const customers = await Customer.findAll({
    //   attributes: { exclude: ["status", "id"] },
    // });

    // const customers = await Customer.findOne({
    //   attributes: { exclude: ["status"] },
    // });

    // const customers = await Customer.findByPk(2);

    // const customers = await Customer.findAll({
    //   where: {
    //     id: {
    //       [Op.ne]: "2",
    //     },
    //   },
    // });

    // const customers = await Customer.findAll({
    //   where: {
    //     [Op.or]: {
    //       status: {
    //         [Op.in]: ["ACTIVE", "ARCHIVED"],
    //       },
    //       name: {
    //         [Op.like]: "Aleha%",
    //       },
    //     },
    //     createdAt: {
    //       [Op.between]: [new Date(20019, 1, 1), new Date(2024, 1, 1)],
    //     },
    //   },
    // });

    // const customers = await Customer.findAll({ include: [Contact] });

    // const customers = await Customer.findAll({
    //   include: [
    //     {
    //       model: Contact,
    //       where: {
    //         status: "ACTIVE",
    //       },
    //     },
    //   ],
    // });

    // const customers = await Customer.findAll({
    //   order: [["name", "DESC"], ["createdAt"]],
    // });

    // const customers = await Customer.findAll({
    //   limit: 20,
    //   offset: 20 * 1 - 20, //limit * page - limit
    // });

    // const customers = await Customer.count();

    // const customers = await Customer.scope("active").findAll();

    // Usando escopo como função
    // const customers = await Customer.scope({
    //   method: ["created", new Date(2023, 1, 1)],
    // }).findAll();

    // Usando multiplos escopos
    // const customers = await Customer.scope(["active", ["name"]]).findAll();
    // console.log(JSON.stringify(customers, null, 2));

    // Create
    // const customer = await Customer.create({
    //   name: "Teste",
    //   email: "teste@gmail.com",
    // });

    // Update
    // const customerPK = await Customer.findByPk(3);
    // console.log("Antes: ", JSON.stringify(customerPK, null, 2));
    // await customerPK.update({ status: "ARCHIVED" });s
    // console.log("Depois: ", JSON.stringify(customerPK, null, 2));

    // Delete
    // const customerPK = await Customer.findByPk(5);
    // customerPK.destroy();
    // const customer = await Customer.findAll();
    // console.log(JSON.stringify(customer, null, 2));

    console.log(JSON.stringify(customer, null, 2));
  }
}

Playground.play();
