import fastify from 'fastify';
import { taskRoutes } from './modules/tasks/task.routes.js';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
});

// Endpoint de integridade (Health Check)
app.get('/health', async () => {
  return { status: 'OK', uptime: process.uptime() };
});

// Registra o módulo de tarefas
app.register(taskRoutes);

export { app };
