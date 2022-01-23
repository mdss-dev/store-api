import ClientRepository from "../repositories/client.repository.js";

//função responsável por criar o client
async function createClient(client) {
  return await ClientRepository.insertClient(client); //envia os dados do client para o DB
}

async function getClients() {
  return await ClientRepository.getClients(); //retorna os dados dos clients
}

async function getClient(id) {
  return await ClientRepository.getClient(id);
}

async function deleteClient(id) {
  await ClientRepository.deleteClient(id);
}

async function updateClient(client) {
  return await ClientRepository.updateClient(client);
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
