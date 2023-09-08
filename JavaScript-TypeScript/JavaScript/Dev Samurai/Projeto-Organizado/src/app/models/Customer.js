import Sequelize, { Model, Op, where } from "sequelize";

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
      },
      {
        scopes: {
          active: {
            where: {
              status: "ACTIVE",
            },
          },
          name: {
            where: {
              name: "Alehandro",
            },
          },
          created(date) {
            return {
              where: {
                createdAt: {
                  [Op.gte]: date,
                },
              },
            };
          },
        },
        name: {
          singular: "customer",
          plural: "customers",
        },
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Contact);
  }
}

export default Customer;
