import express from "express";
import { config } from "dotenv";
import cors from "cors";
import defaultRouter from "./routes/defaultRouter.js";
// eslint-disable-next-line import/extensions

config({
  path: "./config/.env",
});

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(defaultRouter);

export default app;
