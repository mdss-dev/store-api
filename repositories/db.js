import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://tczhnmzt:m-B6b658mOuEa1KmIdLrTyU9Wz7SIBxi@kesavan.db.elephantsql.com/tczhnmzt",
  {
    dialect: "postgres",
    define: {
      timestamps: false, //banco nao grava data e hora da criação ou modificação dos registros
    },
  }
);

export default sequelize;

// import pg from "pg";

// async function connect() {
//   if (global.connection) {
//     return global.connection.connect();
//   }
//   const pool = new pg.Pool({
//     connectionString:
//       "postgres://tczhnmzt:m-B6b658mOuEa1KmIdLrTyU9Wz7SIBxi@kesavan.db.elephantsql.com/tczhnmzt",
//   });
//   global.connection = pool;
//   return pool.connect();
// }

// export { connect };
