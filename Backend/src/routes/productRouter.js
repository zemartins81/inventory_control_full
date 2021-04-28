import express from "express";
import productService from "../services/productService.js";

const productRouter = express.Router();

productRouter.get("/", async (err, req, res, next) => {
  console.log("test");
  const result = await productService.getProducts();
  return res.status(result.status).send(result);
});

productRouter.post("/", async (req, res) => {
  const product = req.body;
  const result = await productService.setProduct(product);
  console.log(result);
  return res.status(result.status).send(result);
});

export default productRouter;
