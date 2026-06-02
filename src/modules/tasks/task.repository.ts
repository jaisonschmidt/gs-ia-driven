import { randomUUID } from 'node:crypto';
import { ITaskRepository, Task, TaskStatus } from './task.types.js';

export class TaskRepository implements ITaskRepository {
  private tasks: Map<string, Task> = new Map();

  async create(taskData: Omit<Task, 'id'>): Promise<Task> {
    const id = randomUUID();
    const newTask: Task = {
      id,
      ...taskData,
    };
    this.tasks.set(id, newTask);
    return newTask;
  }

  async findById(id: string): Promise<Task | null> {
    return this.tasks.get(id) || null;
  }

  async findAll(status?: TaskStatus): Promise<Task[]> {
    const allTasks = Array.from(this.tasks.values());
    if (status) {
      return allTasks.filter((task) => task.status === status);
    }
    return allTasks;
  }

  async update(id: string, data: Partial<Task>): Promise<Task | null> {
    const task = this.tasks.get(id);
    if (!task) return null;

    const updatedTask: Task = {
      ...task,
      ...data,
      updatedAt: new Date(),
    };

    this.tasks.set(id, updatedTask);
    return updatedTask;
  }
}
