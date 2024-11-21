import express from "express";
import fs from "fs";
import cors from "cors"; // Para permitir requisições do React

const app = express();
const port = 3001;

// Middleware para permitir requisições de diferentes origens
app.use(cors());
app.use(express.json());

// Endpoint para salvar os dados no arquivo JSON
app.post("/save", (req, res) => {
  const { nome, email, senha, mensagem } = req.body;

  const novoDado = { nome, email, senha, mensagem };

  // Lê o arquivo 'dados.json' para obter os dados existentes
  fs.readFile("dados.json", "utf8", (err, data) => {
    if (err) {
      // Se não houver dados ainda, criamos o arquivo
      const dados = [novoDado];
      fs.writeFile("dados.json", JSON.stringify(dados, null, 2), (err) => {
        if (err) {
          res.status(500).send("Erro ao salvar os dados.");
        } else {
          res.status(200).send("Dados salvos com sucesso!");
        }
      });
    } else {
      // Tenta converter os dados lidos em JSON
      let dadosExistentes = [];

      try {
        dadosExistentes = JSON.parse(data);
      } catch (parseErr) {
        console.error("Erro ao parsear os dados:", parseErr);
        return res.status(500).send("Erro ao ler os dados.");
      }

      // Verifica se os dadosExistentes são um array
      if (Array.isArray(dadosExistentes)) {
        dadosExistentes.push(novoDado);
      } else {
        // Se não for um array, inicializamos um array com o novo dado
        dadosExistentes = [novoDado];
      }

      // Escreve os dados no arquivo
      fs.writeFile("dados.json", JSON.stringify(dadosExistentes, null, 2), (err) => {
        if (err) {
          res.status(500).send("Erro ao salvar os dados.");
        } else {
          res.status(200).send("Dados salvos com sucesso!");
        }
      });
    }
  });
});

// Rota para obter os dados salvos
app.get("/dados", (req, res) => {
  fs.readFile("dados.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Erro ao ler os dados.");
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

// Inicia o servidor na porta definida
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
