const express = require("express");
const app = express();
const port = 3000;

var listaFrutas = [];

app.get("/frutas", (req, res) => {
  res.json({ frutas: listaFrutas });
});
app.post("/frutas", (req, res) => {
  listaFrutas.push("Banana");
  res.json({ frutas: listaFrutas });
});
app.put("/frutas", (req, res) => {
  listaFrutas[0] = "Pera";
  res.json({ frutas: listaFrutas });
});
app.patch("/frutas", (req, res) => {
  listaFrutas[0] = "Limão";
  res.json({ frutas: listaFrutas });
});
app.delete("/frutas", (req, res) => {
  listaFrutas.pop();
  res.json({ frutas: listaFrutas });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
