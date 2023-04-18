import { Router } from "express";
import healthRouter from "../routers/health.router";
import tasks from "../routers/tasks.router";


const router = Router();

router.use('/health', healthRouter);
router.use('/tasks', tasks);

export default router;