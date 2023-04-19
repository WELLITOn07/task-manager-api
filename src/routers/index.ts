import { Router } from "express";
import healthRouter from "../routers/health.router";
import tasks from "../routers/tasks.router";
import users from "../routers/users.router";


const router = Router();

router.use('/health', healthRouter);
router.use('/tasks', tasks);
router.use('/users', users);

export default router;