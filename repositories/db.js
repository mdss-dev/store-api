import pg from "pg";
import sequelize from "sequelize";

const sequelize = sequelize;

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      "postgres://tczhnmzt:m-B6b658mOuEa1KmIdLrTyU9Wz7SIBxi@kesavan.db.elephantsql.com/tczhnmzt",
  });
  global.connection = pool;
  return pool.connect();
}

export default sequelize;
