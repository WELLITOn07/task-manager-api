import { Schema } from "mongoose";
import mongoose from "mongoose";

export const taskSchema = new Schema({
  _id: {
    auto: true,
    type: 'ObjectId',
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Task = mongoose.model("Task", taskSchema);
