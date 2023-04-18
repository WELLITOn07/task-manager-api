import express from "express";
import cors from "cors";

import healthRouter from "./routers/health.router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(healthRouter);

const port: number = 3000;

app.listen(port, () => {
    console.log('Online!');
});