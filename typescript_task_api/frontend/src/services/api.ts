import type { CreateTaskDto, Task, UpdateTaskDto } from '@/types/task';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taskService = {
  // Get all tasks
  async getAllTasks(): Promise<Task[]> {
    const { data } = await api.get<Task[]>('/tasks');
    return data;
  },

  // Get task by ID
  async getTaskById(id: number): Promise<Task> {
    const { data } = await api.get<Task>(`/tasks/${id}`);
    return data;
  },

  // Create new task
  async createTask(task: CreateTaskDto): Promise<Task> {
    const { data } = await api.post<Task>('/tasks', task);
    return data;
  },

  // Update task
  async updateTask(id: number, task: UpdateTaskDto): Promise<Task> {
    const { data } = await api.put<Task>(`/tasks/${id}`, task);
    return data;
  },

  // Delete task
  async deleteTask(id: number): Promise<void> {
    await api.delete(`/tasks/${id}`);
  },
};
