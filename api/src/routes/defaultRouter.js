import express from "express";
import productRouter from "./productRouter.js";
import errorControl from "../helpers/errorControl.js";

const defaultRouter = express.Router();

defaultRouter.get("/", (req, res) => {
  res.send("Hello!");
});

defaultRouter.use("/products", productRouter);

defaultRouter.use((req, res) =>
  res
    .status(errorControl.NotFound().statusCode)
    .send({message: errorControl.NotFound().message})
);

export default defaultRouter;
