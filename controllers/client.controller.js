import ClientService from "../services/client.service.js";

// função para criar um cliente
async function createClient(req, res, next) {
  try {
    let client = req.body; //variável que terá os dados do inseridos pelo cliente

    //verifica se todos dados foram inseridos
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error("Name, Cpf, Phone, Email e Address são obrigatórios.");
    }
    //envia os dados do cliente para o service
    client = await ClientService.createClient(client);
    res.send(client);
    //log de informação
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

async function getClients(req, res, next) {
  try {
    res.send(await ClientService.getClients());
    logger.info("GET /client ");
  } catch (err) {
    next(err);
  }
}

async function getClient(req, res, next) {
  try {
    res.send(await ClientService.getClient(req.params.id));
    logger.info("GET /client ");
  } catch (err) {
    next(err);
  }
}

async function deleteClient(req, res, next) {
  try {
    res.send(await ClientService.deleteClient(req.params.id));
    logger.info("DELETE /client");
  } catch (err) {
    next(err);
  }
}

async function updateClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.client_id ||
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error(
        "Client ID, Name, Cpf, Phone, Email e Address são obrigatórios."
      );
    }
    client = await ClientService.updateClient(client);
    res.send(client);
    logger.info(`PUT /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient,
  updateClient,
};
