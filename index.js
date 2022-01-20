import express from "express";
import clientsRouter from "./routes/client.route.js";
import productsRouter from "./routes/product.route.js";
import salesRouter from "./routes/sale.route.js";
import suppliersRouter from "./routes/supplier.route.js";

const app = express();

app.use("/client", clientsRouter);
app.use("/product", productsRouter);
app.use("/sale", salesRouter);
app.use("/supllier", suppliersRouter);

app.listen(3000, () => console.log("Api started!"));
