import { Task } from "../models/tasks.model";
import taskRepository from "../repositories/task.repository";

class TasksService {
  async getAll() {
    const tasks = await taskRepository.getAll();

    return tasks;
  }

  async getById(_id: string) {
    const task = await taskRepository.getById(_id);

    return task;
  }

  async create(task: typeof Task) {
    const createdTask = await taskRepository.create(task);

    if (!createdTask) {
      throw new Error();
    }

    return createdTask;
  }

  async remove(_id: string) {
    const deletedTask = await taskRepository.remove(_id);

    if (deletedTask.deletedCount <= 0) {
      throw new Error();
    }

    return deletedTask;
  }

  async update(_id: string, task: Partial<typeof Task>) {
    const updatedTask = await taskRepository.update(_id, task);

    if (updatedTask.matchedCount <= 0) {
      throw new Error();
    }

    return updatedTask;
  }
}

export default new TasksService();
