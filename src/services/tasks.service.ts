import { Task } from "../models/tasks.model";

class tasksService {
  tasks: Task[] = [
    {
      id: "0",
      title: "Comprar leite",
      description: "Comprar 2 litros de leite no mercado.",
      completed: false,
    },
    {
      id: "1",
      title: "Pagar a conta de luz",
      description: "Pagar a conta de luz que vence em 3 dias.",
      completed: false,
    },
    {
      id: "2",
      title: "Estudar para a prova",
      description: "Revisar as notas de aula para a prova de matemática.",
      completed: true,
    },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: string) {
    const task: Task | undefined = this.tasks.find(task => {
        return task.id === id;
    })

    return task;
  }

  create(task: Task) {
    this.tasks.push(task);
  }

  remove(id: string) {
    const taskIndex = this.tasks.findIndex(
        (task) => task.id === id
    );

    if (taskIndex === -1) {
        throw new Error('Task não encontrada!');
    }

    this.tasks.splice(taskIndex, 1);
  }

  update(id: string, task: Task) {
    const taskIndex = this.tasks.findIndex(
        (task) => task.id === id
      );
    
      if (taskIndex === -1) {
        throw new Error('Task não encontrada!');
      }

      this.tasks[taskIndex] = task;
  }
};

export default new tasksService();
