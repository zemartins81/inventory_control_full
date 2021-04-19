import express from "express";
import productRouter from "./productRouter";
import errorControl from "../helpers/errorControl";

const defaultRouter = express.Router();

defaultRouter.use("/products", productRouter);

defaultRouter.use((req, res) => {
  return res
    .status(errorControl.NotFound().statusCode)
    .send({ message: errorControl.NotFound().message });
});

export default defaultRouter;
