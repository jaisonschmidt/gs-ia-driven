import { FastifyInstance } from 'fastify';
import { TaskRepository } from './task.repository.js';
import { TaskService } from './task.service.js';
import { TaskStatus } from './task.types.js';

// Instanciamos uma única vez fora do plugin de rotas para servir como nosso banco de dados em memória persistente
const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);

export async function taskRoutes(fastify: FastifyInstance) {
  // GET /tasks — Listar tarefas (com filtro opcional de status na query)
  fastify.get('/tasks', async (request, reply) => {
    const { status } = request.query as { status?: TaskStatus };
    
    // Validação básica do filtro
    if (status && status !== 'pending' && status !== 'completed') {
      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: 'O filtro de status deve ser "pending" ou "completed".'
      });
    }

    const tasks = await taskService.listTasks(status);
    return reply.status(200).send(tasks);
  });

  // POST /tasks — Criar tarefa
  fastify.post('/tasks', async (request, reply) => {
    try {
      const { title, description } = request.body as { title: string; description?: string };

      if (!title || typeof title !== 'string') {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'O campo "title" é obrigatório e deve ser uma string.'
        });
      }

      const task = await taskService.createTask({ title, description });
      return reply.status(201).send(task);
    } catch (error: any) {
      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: error.message || 'Erro ao processar criação de tarefa.'
      });
    }
  });

  // PATCH /tasks/:id/complete — Concluir tarefa
  fastify.patch('/tasks/:id/complete', async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      if (!id || typeof id !== 'string') {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'O ID da tarefa é obrigatório.'
        });
      }

      const task = await taskService.completeTask(id);
      return reply.status(200).send(task);
    } catch (error: any) {
      const message = error.message || '';
      
      if (message.includes('não encontrada')) {
        return reply.status(404).send({
          statusCode: 404,
          error: 'Not Found',
          message
        });
      }

      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message
      });
    }
  });
}
