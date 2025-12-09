import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";

const app = express();
app.use(express.json()); // Permite ler JSON no corpo da requisição

// Conecta ao Banco de Dados e inicia o servidor
AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado!");

    // Prefixo /api conforme sugerido na tabela [cite: 24]
    app.use("/api", routes);

    app.listen(3000, () => {
      console.log(
        "Servidor rodando na porta 3000: http://localhost:3000/api/livros"
      );
    });
  })
  .catch((error) => console.log(error));
