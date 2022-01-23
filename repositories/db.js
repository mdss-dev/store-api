import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      "postgres://gvzmibeq:fc83giuq8qKzSOMZYiQgSYrFpoQ2xpSI@kesavan.db.elephantsql.com/gvzmibeq",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
