import { Router } from "express";
import productRouter from "./productRouter.js";

const defaultRouter = Router();

defaultRouter.use("/products", productRouter);

export default defaultRouter;
