import express from "express";
import { config } from "dotenv";
// eslint-disable-next-line import/extensions
import defaultRouter from "./routes/defaultRouter.js";

config({
  path: "./.env",
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(defaultRouter);

export default app;
