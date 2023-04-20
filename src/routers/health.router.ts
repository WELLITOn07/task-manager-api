import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const healtCheck = {message: 'Aplicação funcionando com sucesso!'};

    res.send(healtCheck);
});

router.get('/check',  (req: Request, res: Response) => {
    const healtStatus = {status: 'Aplicação funcionando normalmente!'};

    res.send(healtStatus);
});

export default router;