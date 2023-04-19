
import { Task } from './../models/tasks.model';

class TaskRepository {
    getAll() {
       return Task.find();
    }

    getById(id: string) {
        return Task.findOne({id});
    }

    create(task: typeof Task) {
        return Task.create(task);
    }

    update(id: string, task: typeof Task) {
        return Task.updateOne({id}, {$set: task})
    }

    remove(id: string) {
        return Task.deleteOne({id: id});
    }
};

export default new TaskRepository();