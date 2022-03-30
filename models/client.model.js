import Sequelize from "sequelize";
import db from "../repositories/db";

const Client = db.define(
  "clients",
  {
    clientId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,

      allowNull: false,
    },
  },
  { underscored: true } //informar que o banco esta trabalhando com underline ao invés de camelCase(que é o padrão so sequelize)
);

export default Client;
