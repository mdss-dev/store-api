import SaleRepository from "../repositories/sale.repository.js";
import ClientRepository from "../repositories/client.repository.js";
import ProductRepository from "../repositories/product.repository.js";

async function createSale(sale) {
  let error = "";

  if (!(await ClientRepository.getClient(sale.client_id))) {
    error = "O product_id informado não existe.";
  }
  if (!(await ProductRepository.getProduct(sale.product_id))) {
    error += " O client_id informado não existe.";
  }
  if (error) {
    throw new Error(error);
  }
  return await SaleRepository.insertSale(sale);
}

async function getSales() {
  if (await SaleRepository.getSales()) {
    return await SaleRepository.getSales();
  }
  throw new Error("Não existem sales cadastrados.");
}

async function getSale(id) {
  if (await SaleRepository.getSale(id)) {
    return await SaleRepository.getSale(id);
  }
  throw new Error("O sale_id informado não existe.");
}

async function deleteSale(id) {
  if (await SaleRepository.getSale(id)) {
    return await SaleRepository.deleteSale(id);
  }
  throw new Error("O sale_id informado não existe.");
}

async function updateSale(sale) {
  let error = "";

  if (!(await ClientRepository.getClient(sale.client_id))) {
    error = "O client_id informado não existe.";
  }
  if (!(await ProductRepository.getProduct(sale.product_id))) {
    error += " O product_id informado não existe.";
  }
  if (error) {
    throw new Error(error);
  }
  return await SaleRepository.updateSale(sale);
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};