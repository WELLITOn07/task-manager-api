import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IUser {
  email: string;
  password: string;
  createdAt?: string | Date
};

export const userSchema = new Schema<IUser>({
  email: {
    type: String
  },
  password: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const User = mongoose.model<IUser>("User", userSchema);
