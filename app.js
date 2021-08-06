const express = require("express");
const app = express();
const port = 3000;

var listaFrutas = [];

// GET -> Retorna dados ou interface. Faz pesquisas.
// POST -> Salvar dados. Cadastros
// PUT/PATCH -> Atualizar dados
// DELETE -> Deletar dados

// CRUD
// Create -> Criar -> POST
// Read -> Ler/Visualizar -> Get
// Update -> Atualizar -> PUT/PATCH
// Delete -> Deletar -> DELETE

// Create -> Criar
app.post("/frutas", (req, res) => {
  listaFrutas.push("Banana");
  res.json({ frutas: listaFrutas });
});
// Read -> Ler
app.get("/frutas", (req, res) => {
  res.json({ frutas: listaFrutas });
});
// Update -> Atualizar
app.put("/frutas", (req, res) => {
  listaFrutas[0] = "Pera";
  res.json({ frutas: listaFrutas });
});
// Update -> Atualizar
app.patch("/frutas", (req, res) => {
  listaFrutas[0] = "Limão";
  res.json({ frutas: listaFrutas });
});
// Delete -> Deletar
app.delete("/frutas", (req, res) => {
  listaFrutas.pop();
  res.json({ frutas: listaFrutas });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
