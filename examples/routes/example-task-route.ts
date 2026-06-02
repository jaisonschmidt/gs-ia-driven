import { FastifyInstance } from 'fastify';
import { TaskService } from '../../src/modules/tasks/task.service.js';
import { TaskRepository } from '../../src/modules/tasks/task.repository.js';

// Exemplo didático de definição de rotas usando Fastify e TypeScript
export async function exampleTaskRoutes(fastify: FastifyInstance) {
  // Instanciamos o repositório e injetamos no serviço (Injeção de dependências manual)
  const taskRepository = new TaskRepository();
  const taskService = new TaskService(taskRepository);

  // Rota de criação de tarefas
  fastify.post('/examples/tasks', async (request, reply) => {
    try {
      const { title, description } = request.body as { title: string; description?: string };

      // Validação rápida na camada de transporte (HTTP)
      if (!title || typeof title !== 'string') {
        return reply.status(400).send({
          statusCode: 400,
          error: 'Bad Request',
          message: 'O campo "title" é obrigatório e deve ser uma string.'
        });
      }

      // Executamos a ação na camada de serviço (Domínio)
      const task = await taskService.createTask({ title, description });

      // Retornamos 201 Created com o objeto da tarefa criada
      return reply.status(201).send(task);
    } catch (error: any) {
      // Capturamos erros conhecidos e retornamos o status HTTP correspondente
      return reply.status(400).send({
        statusCode: 400,
        error: 'Bad Request',
        message: error.message || 'Erro ao processar requisição.'
      });
    }
  });
}
