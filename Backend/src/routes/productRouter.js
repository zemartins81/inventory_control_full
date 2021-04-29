import express from "express";
import productService from "../services/productService.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const result = await productService.getProducts();
  return res.status(result.status).send(result);
});

productRouter.post("/", async (req, res) => {
  const product = req.body;
  const result = await productService.setProduct(product);
  return res.status(result.status).send(result);
});

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await productService.getProductById(id);
  return res.status(result.status).send(result);
});

export default productRouter;
