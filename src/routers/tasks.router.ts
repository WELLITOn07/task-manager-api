import { Request, Response, Router } from "express";
import tasksService from "../services/tasks.service";

const router = Router();

router.get("/", async (__: Request, res: Response) => {
  const tasks = await tasksService.getAll();

  if (!tasks) {
    return res.status(400).send({ message: "Erro ao buscar todas as tarefas" });
  }

  res.status(200).send(tasks);
});

router.get("/:_id", async (req: Request, res: Response) => {
  const {_id} = req.params;

  const task = await tasksService.getById(_id);

  if (!task) {
    return res.status(400).send({ message: "Tarefa não encontrada!" });
  }

  res.status(200).send(task);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await tasksService.create(req.body);
    res.status(201).send("Tarefa adicionada com sucesso!");
  } catch (error) {
    res.status(400).send({ message: "Erro ao criar nova tarefa" });
  }
});

router.delete("/remove/:_id", async (req: Request, res: Response) => {
  const {_id} = req.params;

  try {
    await tasksService.remove(_id);
    res.status(200).send({ message: "Tarefa removida com sucesso!" });
  } catch (error) {
    res.status(400).send({ message: "Erro ao remover tarefa" });
  }
});

router.put("/:_id", async (req: Request, res: Response) => {
  const {_id} = req.params;

  try {
    await tasksService.update(_id, req.body);
    res.status(200).send({ message: "Tarefa atualizada com sucesso!" });
  } catch (error) {
    res.status(400).send({ message: "Erro ao atualizar tarefa" });
  }
});

export default router;
