import SupplierRepository from "../repositories/supplier.repository.js";

//função responsável por criar o supplier
async function createSupplier(supplier) {
  return await SupplierRepository.insertSupplier(supplier); //envia os dados do supplier para o DB
}

async function getSuppliers() {
  return await SupplierRepository.getSuppliers(); //retorna os dados dos suppliers
}

async function getSupplier(id) {
  return await SupplierRepository.getSupplier(id);
}

async function deleteSupplier(id) {
  await SupplierRepository.deleteSupplier(id);
}

async function updateSupplier(supplier) {
  return await SupplierRepository.updateSupplier(supplier);
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};
