import ClientRepository from "../repositories/client.repository.js";

//função responsável por criar o client
async function createClient(client) {
  return await ClientRepository.insertClient(client); //envia os dados do client para o DB
}

async function getClients() {
  if (await ClientRepository.getClients()) {
    return await ClientRepository.getClients(); //retorna os dados dos clients
  }
  throw new Error("Não existem clients cadastrados.");
}

async function getClient(id) {
  if (await ClientRepository.getClient(id)) {
    return await ClientRepository.getClient(id);
  }
  throw new Error("O client_id informado não existe.");
}

async function deleteClient(id) {
  if (await ClientRepository.getClient(id)) {
    return await ClientRepository.deleteClient(id);
  }
  throw new Error("O client_id informado não existe.");
}

async function updateClient(client) {
  if (await ClientRepository.getClient(client.client_id)) {
    return await ClientRepository.updateClient(client);
  }
  throw new Error("O client_id informado não existe.");
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
