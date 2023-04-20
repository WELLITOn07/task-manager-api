import { IUser, User } from "../models/user.model";
import userRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || "";

class UsersService {
  async getAll() {
    const users = await userRepository.getAll();

    return users;
  }

  async getByEmail(email: string) {
    const user = await userRepository.getByEmail(email);

    return user;
  }

  async create(user: IUser) {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    const createdUser = await userRepository.create(user);

    if (!createdUser) {
      throw new Error();
    }

    return createdUser;
  }

  async authorization(email: string, password: string) {
    const user = await userRepository.getByEmail(email);

    if (!user) throw new Error("Usuário não encontrado");

    const result = await bcrypt.compare(password, user.password);

    if (result) {
      return jwt.sign(
        {
          email: user.email,
          _id: user._id,
        },
        secretJWT,
        {
          expiresIn: "1h",
        }
      );
    }

    throw new Error("Falha na autenticação");
  }

  async remove(email: string) {
    const deletedUser = await userRepository.remove(email);

    if (deletedUser.deletedCount <= 0) {
      throw new Error();
    }

    return deletedUser;
  }

  async update(email: string, user: Partial<IUser>) {
    const updatedUser = await userRepository.update(email, user);

    if (updatedUser.matchedCount <= 0) {
      throw new Error();
    }

    return updatedUser;
  }
}

export default new UsersService();
