import * as yup from "yup";
import { parseISO } from "date-fns";
import { Op } from "sequelize";

import Customer from "../models/Customer";
import Contact from "../models/Contact";

class CustomersController {
  async index(req, res) {
    const {
      name,
      email,
      status,
      createdBefore,
      createdAfter,
      updatedBefore,
      updatedAfter,
      sort,
    } = req.query;

    const page = req.query.page || 1;
    const limit = req.query.limit || 25;

    let where = {};
    let order = [];

    if (name) {
      where = {
        ...where,
        name: {
          [Op.like]: name,
        },
      };
    }

    if (email) {
      where = {
        ...where,
        email: {
          [Op.like]: email,
        },
      };
    }

    if (status) {
      where = {
        ...where,
        status: {
          [Op.in]: status.split(",").map((item) => item.toUpperCase()),
        },
      };
    }

    if (createdBefore) {
      where = {
        ...where,
        createdAt: {
          [Op.gte]: parseISO(createdBefore),
        },
      };
    }

    if (createdAfter) {
      where = {
        ...where,
        createdAt: {
          [Op.lte]: parseISO(createdAfter),
        },
      };
    }

    if (updatedBefore) {
      where = {
        ...where,
        updatedAt: {
          [Op.gte]: parseISO(updatedBefore),
        },
      };
    }

    if (updatedAfter) {
      where = {
        ...where,
        updatedAt: {
          [Op.lte]: parseISO(updatedAfter),
        },
      };
    }

    if (sort) {
      order = sort.split(",").map((item) => item.split(":"));
    }

    const data = await Customer.findAll({
      where,
      include: [
        {
          model: Contact,
          attributes: ["id", "status"],
        },
      ],
      order,
      limit,
      offset: limit * page - limit,
    });

    return res.json(data);
  }

  async show(req, res) {
    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(404).json();
    }

    return res.json(customer);
  }

  async create(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      status: yup.string().uppercase(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro on validate schema." });
    }

    const customer = await Customer.create(req.body);

    return res.status(201).json(customer);
  }

  async update(req, res) {
    const schema = yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
      status: yup.string().uppercase(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro on validate schema." });
    }

    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(404).json();
    }

    await customer.update(req.body);

    return req.json(customer);
  }

  async destroy(req, res) {
    const customer = await Customer.findByPk(req.params.id);

    if (!customer) {
      return res.status(404).json();
    }

    await customer.destroy();

    return res.json();
  }
}

export default new CustomersController();
