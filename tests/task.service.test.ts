import { describe, it, expect, beforeEach } from 'vitest';
import { TaskService } from '../src/modules/tasks/task.service.js';
import { TaskRepository } from '../src/modules/tasks/task.repository.js';

describe('TaskService Unit Tests', () => {
  let taskRepository: TaskRepository;
  let taskService: TaskService;

  beforeEach(() => {
    // Inicia um novo repositório limpo a cada teste
    taskRepository = new TaskRepository();
    taskService = new TaskService(taskRepository);
  });

  describe('createTask', () => {
    it('should create a task successfully with valid parameters', async () => {
      const task = await taskService.createTask({
        title: 'Estudar TypeScript',
        description: 'Aprender tipos e interfaces avançadas',
      });

      expect(task.id).toBeDefined();
      expect(task.title).toBe('Estudar TypeScript');
      expect(task.description).toBe('Aprender tipos e interfaces avançadas');
      expect(task.status).toBe('pending');
      expect(task.createdAt).toBeInstanceOf(Date);
      expect(task.updatedAt).toBeInstanceOf(Date);
      expect(task.completedAt).toBeNull();
    });

    it('should trim title and description whitespace', async () => {
      const task = await taskService.createTask({
        title: '  Estudar IA   ',
        description: '   Aprender prompts   ',
      });

      expect(task.title).toBe('Estudar IA');
      expect(task.description).toBe('Aprender prompts');
    });

    it('should throw an error if title is shorter than 3 characters', async () => {
      await expect(
        taskService.createTask({ title: 'Ab' })
      ).rejects.toThrow('O título da tarefa é obrigatório e deve ter no mínimo 3 caracteres.');
    });

    it('should throw an error if title is longer than 100 characters', async () => {
      const longTitle = 'a'.repeat(101);
      await expect(
        taskService.createTask({ title: longTitle })
      ).rejects.toThrow('O título da tarefa não pode ter mais de 100 caracteres.');
    });
  });

  describe('getTaskById', () => {
    it('should return a task by its ID', async () => {
      const createdTask = await taskService.createTask({ title: 'Task Test' });
      const foundTask = await taskService.getTaskById(createdTask.id);

      expect(foundTask).toBeDefined();
      expect(foundTask.id).toBe(createdTask.id);
    });

    it('should throw an error if task does not exist', async () => {
      await expect(
        taskService.getTaskById('non-existent-uuid')
      ).rejects.toThrow('Tarefa não encontrada.');
    });
  });

  describe('listTasks', () => {
    it('should return all created tasks', async () => {
      await taskService.createTask({ title: 'Task 1' });
      await taskService.createTask({ title: 'Task 2' });

      const tasks = await taskService.listTasks();
      expect(tasks).toHaveLength(2);
    });

    it('should filter tasks by pending status', async () => {
      const task1 = await taskService.createTask({ title: 'Task 1' });
      const task2 = await taskService.createTask({ title: 'Task 2' });
      await taskService.completeTask(task2.id);

      const pendingTasks = await taskService.listTasks('pending');
      expect(pendingTasks).toHaveLength(1);
      expect(pendingTasks[0].id).toBe(task1.id);
    });

    it('should filter tasks by completed status', async () => {
      const task1 = await taskService.createTask({ title: 'Task 1' });
      const task2 = await taskService.createTask({ title: 'Task 2' });
      await taskService.completeTask(task2.id);

      const completedTasks = await taskService.listTasks('completed');
      expect(completedTasks).toHaveLength(1);
      expect(completedTasks[0].id).toBe(task2.id);
    });
  });

  describe('updateTask', () => {
    it('should update task details successfully', async () => {
      const createdTask = await taskService.createTask({
        title: 'Título Antigo',
        description: 'Descrição Antiga',
      });

      const updatedTask = await taskService.updateTask(createdTask.id, {
        title: 'Novo Título',
        description: 'Nova Descrição',
      });

      expect(updatedTask.title).toBe('Novo Título');
      expect(updatedTask.description).toBe('Nova Descrição');
      expect(updatedTask.updatedAt.getTime()).toBeGreaterThanOrEqual(createdTask.createdAt.getTime());
    });

    it('should throw an error when trying to edit a completed task', async () => {
      const createdTask = await taskService.createTask({ title: 'Tarefa Importante' });
      await taskService.completeTask(createdTask.id);

      await expect(
        taskService.updateTask(createdTask.id, { title: 'Alterar Título' })
      ).rejects.toThrow('Não é permitido editar uma tarefa já concluída.');
    });
  });

  describe('completeTask', () => {
    it('should mark task status as completed and define completedAt date', async () => {
      const createdTask = await taskService.createTask({ title: 'Tarefa para Fazer' });
      const completedTask = await taskService.completeTask(createdTask.id);

      expect(completedTask.status).toBe('completed');
      expect(completedTask.completedAt).toBeInstanceOf(Date);
    });

    it('should be idempotent (not throw or change dates if already completed)', async () => {
      const createdTask = await taskService.createTask({ title: 'Tarefa para Fazer' });
      const completedOnce = await taskService.completeTask(createdTask.id);
      
      // Espera 10ms para garantir que se mudasse a data, seria diferente
      await new Promise((resolve) => setTimeout(resolve, 10));

      const completedTwice = await taskService.completeTask(createdTask.id);
      expect(completedTwice.completedAt?.getTime()).toBe(completedOnce.completedAt?.getTime());
    });
  });
});
