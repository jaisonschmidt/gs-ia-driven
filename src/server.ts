import { app } from './app.js';

const PORT = 3333;
const HOST = '0.0.0.0';

async function start() {
  try {
    await app.listen({ port: PORT, host: HOST });
    console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();
