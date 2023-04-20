import express from "express";
import cors from "cors";
import routes from "./routers";
import connection from "./config/database";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const port: number = 3000;

connection.then(() => {
    console.log('banco de dados conectado!');
  app.listen(port, () => {
    console.log("Online!");
  });
}).catch(err => {
    console.error(err);
});
