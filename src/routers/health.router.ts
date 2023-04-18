import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const healtCheck = {message: 'Aplicação funcionando com sucesso!'};

    res.send(healtCheck);
});

export default router;