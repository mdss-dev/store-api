import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";

async function createProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplier_id)) {
    return await ProductRepository.insertProduct(product);
  }
  throw new Error("O supplier_id informado não existe.");
}

async function getProducts() {
  if (await ProductRepository.getProducts()) {
    return await ProductRepository.getProducts();
  }
  throw new Error("Não existe produtos cadastrados.");
}

async function getProduct(id) {
  if (await ProductRepository.getProduct(id)) {
    return await ProductRepository.getProduct(id);
  }
  throw new Error("O id do product informado não existe.");
}

async function deleteProduct(id) {
  if (await ProductRepository.getProduct(id)) {
    return await ProductRepository.deleteProduct(id);
  }
  throw new Error("O product informado não existe");
}

async function updateProduct(product) {
  let error = "";
  if (!(await SupplierRepository.getSupplier(product.supplier_id))) {
    error += "O supplier_id informado não existe ";
  }
  if (!(await ProductRepository.getProduct(product.product_id))) {
    error += "O product_id informado não existe";
  }
  if (error) {
    throw new Error(error);
  }
  return await ProductRepository.insertProduct(product);
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
