import { User } from "../models/user.model";
import userRepository from "../repositories/user.repository";

class UsersService {
  async getAll() {
    const users = await userRepository.getAll();

    return users;
  }

  async getByEmail(email: string) {
    const user = await userRepository.getByEmail(email);

    return user;
  }

  async create(user: typeof User) {
    const createdUser = await userRepository.create(user);

    if (!createdUser) {
      throw new Error();
    }

    return createdUser;
  }

  async remove(email: string) {
    const deletedUser = await userRepository.remove(email);

    if (deletedUser.deletedCount <= 0) {
      throw new Error();
    }

    return deletedUser;
  }

  async update(email: string, user: Partial<typeof User>) {
    const updatedUser = await userRepository.update(email, user);

    if (updatedUser.matchedCount <= 0) {
      throw new Error();
    }

    return updatedUser;
  }
}

export default new UsersService();
