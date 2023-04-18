import express from "express";
import { Request, Response, Router } from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

const router = Router();
const port: number = 3000;

app.use(router);

router.get('/', (req: Request, res: Response) => {
    const text = {value: 'Hello World'};
    res.send(text)
});

app.listen(port, () =>{
    console.log('ONLINE!', port);
});