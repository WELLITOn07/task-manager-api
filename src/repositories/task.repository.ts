
import { Task } from '../models/task.model';

class TaskRepository {
    getAll() {
       return Task.find();
    }

    getById(_id: string) {
        return Task.findOne({_id});
    }

    create(task: typeof Task) {
        return Task.create(task);
    }

    update(_id: string, task: Partial<typeof Task>) {
        return Task.updateOne({_id}, {$set: task})
    }

    remove(_id: string) {
        return Task.deleteOne({_id});
    }
};

export default new TaskRepository();