import { Request, Response, Router } from "express";
import tasksService from "../services/tasks.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const tasks = await tasksService.getAll();

  if (!tasks) {
    return res.status(400).send({ message: "Erro ao buscar todas as tarefas" });
  }

  res.status(200).send(tasks);
});

router.get("/:id", async (req: Request, res: Response) => {
  const task = await tasksService.getById(req.params.id);

  if (!task) {
    return res.status(400).send({ message: "Task não encontrada!" });
  }

  res.status(200).send(task);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await tasksService.create(req.body);
    res.status(201).send("Task adicionada com sucesso!");
  } catch (error) {
    res.status(400).send({ message: "Erro ao criar nova tarefa" });
  }
});

router.delete("/remove/:id", async (req: Request, res: Response) => {
  try {
    await tasksService.remove(req.params.id);
    res.status(200).send({ message: "Task removida com sucesso!" });
  } catch (error) {
    res.status(400).send({ message: "Erro ao remover tarefa" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    await tasksService.update(req.params.id, req.body);
    res.status(200).send({ message: "Task atualizada com sucesso!" });
  } catch (error) {
    res.status(400).send({ message: "Erro ao atualizar tarefa" });
  }
});

export default router;
