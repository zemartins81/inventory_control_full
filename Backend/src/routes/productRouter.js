import { Router } from "express";
import productService from "../services/productService.js";

const router = Router();

router.get("/", async (req, res, next) => {
  const products = await productService.getProducts();
  res.json(products);
});

router.get("/:description", async (req, res, next) => {
  const { description } = req.params;
  const getProduct = await productService.getProduct(description);
  res.json(getProduct);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const getProduct = await productService.getProduct(id);
  res.json(getProduct);
});

router.post("/", async (req, res, next) => {
  const product = req.body;
  try {
    const newProduct = await productService.saveProduct(product);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const product = req.body;
  try {
    await productService.updateProduct(req.params.id, product);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  await productService.deleteProduct(id);
  res.status(204).end();
});

export default router;
