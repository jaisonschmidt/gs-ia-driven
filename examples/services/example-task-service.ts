import { ITaskRepository } from '../../src/modules/tasks/task.types.js';

interface CreateTaskDTO {
  title: string;
  description?: string;
}

// Exemplo didático de serviço contendo a lógica de negócios
export class ExampleTaskService {
  // Injetamos a interface do repositório garantindo desacoplamento
  constructor(private taskRepository: ITaskRepository) {}

  async createTask(data: CreateTaskDTO) {
    // Regra de Negócio: validação do título
    if (data.title.trim().length < 3) {
      throw new Error('O título da tarefa deve conter pelo menos 3 caracteres.');
    }

    if (data.title.length > 100) {
      throw new Error('O título da tarefa não pode exceder 100 caracteres.');
    }

    // Criamos a entidade com os valores padrão do Domínio
    const task = await this.taskRepository.create({
      title: data.title.trim(),
      description: data.description?.trim() || null,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      completedAt: null
    });

    return task;
  }
}
