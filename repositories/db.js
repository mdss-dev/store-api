import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://tczhnmzt:m-B6b658mOuEa1KmIdLrTyU9Wz7SIBxi@kesavan.db.elephantsql.com/tczhnmzt",
  {
    dialect: "postgres",
    define: {
      timestamp: false, //banco nao grava data e hora da criação ou modificação dos registros
    },
  }
);

export default sequelize;
