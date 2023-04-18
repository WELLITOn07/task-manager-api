import { Request, Response, Router } from "express";
import tasksService from "../services/tasks.service";
import { Task } from "../models/tasks.model";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const tasks: Task[] = tasksService.getAll();
  res.status(200).send(tasks);
});

router.get("/:id", (req: Request, res: Response) => {
  const task: Task | undefined = tasksService.getById(req.params.id);

  if (!task) {
    return res.status(400).send({ message: "Task não encontrada!" });
  }

  res.status(200).send(task);
});

router.post("/", (req: Request, res: Response) => {
  tasksService.create(req.body);
  res.status(201).send("Task adicionada com sucesso!");
});

router.delete("/remove/:id", (req: Request, res: Response) => {
  try {
    tasksService.remove(req.params.id);
    res.status(200).send({ message: "Task removida com sucesso!" });
  } catch(err) {
    res.status(400).send(err)
  }
  
});

router.put("/:id", (req: Request, res: Response) => {
  try {
    tasksService.update(req.params.id, req.body)
    res.status(200).send({ message: "Task atualizada com sucesso!" });
  } catch(err) {
    res.status(400).send(err);
  }
});

export default router;
