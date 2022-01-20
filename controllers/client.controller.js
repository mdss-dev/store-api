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
    res.send(await ClientService.createClient(client));
    //log de informação
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createClient,
};
