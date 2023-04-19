
import { User } from '../models/user.model';

class UserRepository {
    getAll() {
       return User.find();
    }

    getByEmail(email: string) {
        return User.findOne({email});
    }

    create(user: typeof User) {
        return User.create(user);
    }

    update(email: string, user: Partial<typeof User>) {
        return User.updateOne({email}, {$set: user})
    }

    remove(email: string) {
        return User.deleteOne({email});
    }
};

export default new UserRepository();