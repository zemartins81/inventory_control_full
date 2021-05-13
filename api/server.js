import http from "http";
import dotenv from "dotenv";
import path from "path";
// eslint-disable-next-line import/extensions
import app from "./src/app.js";

const {resolve, join} = path;

dotenv.config({
  path: join(resolve(), "./src/config/", ".env"),
});

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});