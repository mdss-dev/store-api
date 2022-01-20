import express from "express";
import cors from "cors";
import winston from "winston";

import clientsRouter from "./routes/client.route.js";
import productsRouter from "./routes/product.route.js";
import salesRouter from "./routes/sale.route.js";
import suppliersRouter from "./routes/supplier.route.js";

//instanciação do express
const app = express();

//configuração de log

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "store-api.log" }),
  ],
  format: combine(label({ label: "store-api" }), timestamp(), myFormat),
});

//para o express usar json
app.use(express.json());

// permissão acesso de qualquer ip
app.use(cors());

// tratamento das rotas
app.use("/client", clientsRouter);
app.use("/product", productsRouter);
app.use("/sale", salesRouter);
app.use("/supllier", suppliersRouter);

//Middleware de error
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.url} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

//servidor iniciado na porta 3000
app.listen(3000, () => console.log("Api started!"));
