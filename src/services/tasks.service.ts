import { Task } from "../models/tasks.model";
import taskRepository from "../repositories/task.repository";

class TasksService {
  async getAll() {
    const tasks = await taskRepository.getAll();

    return tasks;
  }

  async getById(id: string) {
    const task = await taskRepository.getById(id);

    return task;
  }

  async create(task: typeof Task) {
    const createdTask = await taskRepository.create(task);

    if (!createdTask) {
      throw new Error();
    }

    return createdTask;
  }

  async remove(id: string) {
    const deletedTask = await taskRepository.remove(id);

    if (deletedTask.deletedCount <= 0) {
      throw new Error();
    }

    return deletedTask;
  }

  async update(id: string, task: typeof Task) {
    const updatedTask = await taskRepository.update(id, task);

    if (updatedTask.matchedCount <= 0) {
      throw new Error();
    }

    return updatedTask;
  }
}

export default new TasksService();
