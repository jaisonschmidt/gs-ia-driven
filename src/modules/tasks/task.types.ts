export type TaskStatus = 'pending' | 'completed';

export interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date | null;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
}

export interface ITaskRepository {
  create(task: Omit<Task, 'id'>): Promise<Task>;
  findById(id: string): Promise<Task | null>;
  findAll(status?: TaskStatus): Promise<Task[]>;
  update(id: string, data: Partial<Task>): Promise<Task | null>;
}
