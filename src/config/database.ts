import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', false);

const databaseurl = process.env.taskManagerApi || 'mongodb://127.0.0.1:27017/taskManagerApi';

export default mongoose.connect(databaseurl);