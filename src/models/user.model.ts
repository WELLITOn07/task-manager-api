import { Schema } from "mongoose";
import mongoose from "mongoose";

export const userSchema = new Schema({
  _id: {
    auto: true,
    type: 'ObjectId',
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
