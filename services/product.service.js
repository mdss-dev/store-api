import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import SaleRepository from "../repositories/sale.repository.js";

async function createProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
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
  const sales = await SaleRepository.getSalesByProductId(id);
  if (sales) {
    throw new Error(
      "Não é possível excluir o product pois ele já foi vendido."
    );
  } else {
    if (await ProductRepository.getProduct(id)) {
      return await ProductRepository.deleteProduct(id);
    }
    throw new Error("O product informado não existe");
  }
}

async function updateProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await ProductRepository.updateProduct(product);
  }
  throw new Error("O supplier_id informado não existe.");
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
