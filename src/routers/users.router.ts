import { Request, Response, Router } from "express";
import usersService from "../services/users.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await usersService.getAll();

  if (!users) {
    return res.status(400).send({ message: "Erro ao buscar todos os usuários" });
  }

  res.status(200).send(users);
});

router.get("/:email", async (req: Request, res: Response) => {
  const {email} = req.params;

  const user = await usersService.getByEmail(email);

  if (!user) {
    return res.status(400).send({ message: "Usuário não encontrado!" });
  }

  res.status(200).send(user);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    await usersService.create(req.body);
    res.status(201).send("Usuário adicionado com sucesso!");
  } catch (error) {
    res.status(400).send({ message: "Erro ao criar um novo usuário" });
  }
});

router.delete("/remove/:email", async (req: Request, res: Response) => {
  const {email} = req.params;

  try {
    await usersService.remove(email);
    res.status(200).send({ message: "Usuário removido com sucesso!" });
  } catch (error) {
    res.status(400).send({ message: "Erro ao remover usuário" });
  }
});

router.put("/:email", async (req: Request, res: Response) => {
  const {email} = req.params;

  try {
    await usersService.update(email, req.body);
    res.status(200).send({ message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    res.status(400).send({ message: "Erro ao atualizar usuário" });
  }
});

export default router;
