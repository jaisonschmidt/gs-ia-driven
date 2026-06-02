import { CreateTaskInput, ITaskRepository, Task, TaskStatus, UpdateTaskInput } from './task.types.js';

export class TaskService {
  constructor(private taskRepository: ITaskRepository) {}

  async createTask(input: CreateTaskInput): Promise<Task> {
    const title = input.title?.trim();

    if (!title || title.length < 3) {
      throw new Error('O título da tarefa é obrigatório e deve ter no mínimo 3 caracteres.');
    }

    if (title.length > 100) {
      throw new Error('O título da tarefa não pode ter mais de 100 caracteres.');
    }

    const taskData: Omit<Task, 'id'> = {
      title,
      description: input.description?.trim() || null,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      completedAt: null,
    };

    return this.taskRepository.create(taskData);
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.findById(id);
    if (!task) {
      throw new Error('Tarefa não encontrada.');
    }
    return task;
  }

  async listTasks(status?: TaskStatus): Promise<Task[]> {
    return this.taskRepository.findAll(status);
  }

  async updateTask(id: string, input: UpdateTaskInput): Promise<Task> {
    const task = await this.getTaskById(id);

    // Regra de Negócio: Tarefa concluída não pode ser editada
    if (task.status === 'completed') {
      throw new Error('Não é permitido editar uma tarefa já concluída.');
    }

    const updatedData: Partial<Task> = {};

    if (input.title !== undefined) {
      const title = input.title.trim();
      if (title.length < 3) {
        throw new Error('O título da tarefa deve ter no mínimo 3 caracteres.');
      }
      if (title.length > 100) {
        throw new Error('O título da tarefa não pode ter mais de 100 caracteres.');
      }
      updatedData.title = title;
    }

    if (input.description !== undefined) {
      updatedData.description = input.description.trim() || null;
    }

    const updatedTask = await this.taskRepository.update(id, updatedData);
    if (!updatedTask) {
      throw new Error('Erro ao atualizar a tarefa.');
    }

    return updatedTask;
  }

  async completeTask(id: string): Promise<Task> {
    const task = await this.getTaskById(id);

    if (task.status === 'completed') {
      return task; // Idempotente
    }

    const updatedTask = await this.taskRepository.update(id, {
      status: 'completed',
      completedAt: new Date(),
    });

    if (!updatedTask) {
      throw new Error('Erro ao concluir a tarefa.');
    }

    return updatedTask;
  }
}
