import express from "express";
import usuariosRouter from "./usuario/usuarios.router.js";

const app = express();

app.use("/usuarios", usuariosRouter);

app.get("/", (req, res) => {
  res.json({
    message: "API Tarefas funcionando!",
  });
});

export default app;