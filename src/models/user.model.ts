import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IUser {
  _id: string;
  email: string;
  password: string;
  createdAt: string | Date
};

export const userSchema = new Schema({
  _id: {
    type: String,
  },
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

export const User = mongoose.model("User", userSchema);
