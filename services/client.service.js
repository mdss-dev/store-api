import ClientRepository from "../repositories/client.repository.js";

//função responsável por criar o client
async function createClient(client) {
  return await ClientRepository.insertClient(client); //envia os dados do client para o DB
}

export default {
  createClient,
};
