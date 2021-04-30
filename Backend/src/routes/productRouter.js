import express from "express";
import productService from "../services/productService.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  if (req.query.id) {
    const { id } = req.query;
    const result = await productService.getProductById(id);
    return res.status(result.status).send(result);
  }
  if (req.query.name) {
    const { name } = req.query;
    const result = await productService.getProductByName(name);
    return res.status(result.status).send(result);
  }
  const result = await productService.getProducts();
  return res.status(result.status).send(result);
});

productRouter.post("/", async (req, res) => {
  const product = req.body;
  const result = await productService.setProduct(product);
  return res.status(result.status).send(result);
});

export default productRouter;
