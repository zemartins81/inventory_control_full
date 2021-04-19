import express from "express";
import productService from "../services/productService";

const productRouter = express.Router();

productRouter.get("/", async (err, req, res, next) => {
  const result = await productService.getProducts();
  return res.status(result.status).send(result);
});

export default productRouter;
