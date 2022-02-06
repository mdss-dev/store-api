import SupplierRepository from "../repositories/supplier.repository.js";

//função responsável por criar o supplier
async function createSupplier(supplier) {
  return await SupplierRepository.insertSupplier(supplier); //envia os dados do supplier para o DB
}

async function getSuppliers() {
  if (await SupplierRepository.getSuppliers()) {
    return await SupplierRepository.getSuppliers(); //retorna os dados dos suppliers
  }
  throw new Error("Não existem suppliers cadastrados.");
}

async function getSupplier(id) {
  if (await SupplierRepository.getSupplier(id)) {
    return await SupplierRepository.getSupplier(id);
  }
  throw new Error("O supplier_id informado não existe.");
}

async function deleteSupplier(id) {
  if (SupplierRepository.getSupplier(id)) {
    await SupplierRepository.deleteSupplier(id);
  }
  throw new Error("O supplier_id informado não existe");
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
