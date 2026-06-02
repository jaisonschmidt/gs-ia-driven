import { describe, it, expect, vi } from 'vitest';
import { ExampleTaskService } from '../services/example-task-service.js';
import { ITaskRepository, Task } from '../../src/modules/tasks/task.types.js';

// Exemplo didático de teste utilizando Vitest
describe('ExampleTaskService (Few-shot Example)', () => {
  // Criamos um repositório mockado simples para isolar o teste
  const makeMockRepository = (): ITaskRepository => {
    return {
      create: vi.fn().mockImplementation(async (taskData: Omit<Task, 'id'>) => ({
        id: 'mock-uuid-v4',
        ...taskData
      })),
      findById: vi.fn(),
      findAll: vi.fn(),
      update: vi.fn(),
    };
  };

  it('should create a task successfully with valid data', async () => {
    // Arrange (Preparação)
    const mockRepo = makeMockRepository();
    const service = new ExampleTaskService(mockRepo);
    const input = { title: 'Ler livro de IA', description: 'Ler capítulo 3 do livro' };

    // Act (Ação)
    const result = await service.createTask(input);

    // Assert (Validação)
    expect(result.id).toBe('mock-uuid-v4');
    expect(result.title).toBe('Ler livro de IA');
    expect(result.status).toBe('pending');
    expect(mockRepo.create).toHaveBeenCalledTimes(1);
  });

  it('should throw an error if title is shorter than 3 characters', async () => {
    // Arrange
    const mockRepo = makeMockRepository();
    const service = new ExampleTaskService(mockRepo);
    const input = { title: 'Oi' };

    // Act & Assert (Ação e Validação de Exceção)
    await expect(service.createTask(input)).rejects.toThrow(
      'O título da tarefa deve conter pelo menos 3 caracteres.'
    );
    expect(mockRepo.create).not.toHaveBeenCalled();
  });
});
