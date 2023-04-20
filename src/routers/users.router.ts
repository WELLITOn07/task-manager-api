import { Request, Response, Router } from "express";
import usersService from "../services/users.service";
import { authorizationMiddleware } from "../middlewares/authorization.middleware";

const router = Router();

router.get(
  "/",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    const users = await usersService.getAll();

    if (!users) {
      return res
        .status(400)
        .send({ message: "Erro ao buscar todos os usuários" });
    }

    res.status(200).send(users);
  }
);

router.get(
  "/:email",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    const { email } = req.params;

    const user = await usersService.getByEmail(email);

    if (!user) {
      return res.status(400).send({ message: "Usuário não encontrado!" });
    }

    res.status(200).send(user);
  }
);

router.post(
  "/",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    try {
      await usersService.create(req.body);
      res.status(201).send("Usuário adicionado com sucesso!");
    } catch (error: any) {
      res.status(400).send({ message: "Erro ao criar um novo usuário" });
    }
  }
);

router.post(
  "/authorization",
  async (req: Request, res: Response) => {
    try {
      const token = await usersService.authorization(
        req.body.email,
        req.body.password
      );

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(401).send({ message: "Falha na autenticação" });
    }
  }
);

router.delete(
  "/remove/:email",
  authorizationMiddleware,
  async (req: Request, res: Response) => {
    const { email } = req.params;

    try {
      await usersService.remove(email);
      res.status(200).send({ message: "Usuário removido com sucesso!" });
    } catch (error: any) {
      res.status(400).send({ message: "Erro ao remover usuário" });
    }
  }
);

router.put("/:email", authorizationMiddleware, async (req: Request, res: Response) => {
  const { email } = req.params;

  try {
    await usersService.update(email, req.body);
    res.status(200).send({ message: "Usuário atualizado com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: "Erro ao atualizar usuário" });
  }
});

export default router;
