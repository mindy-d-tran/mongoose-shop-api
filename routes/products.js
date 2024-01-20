import { Router } from "express";

import Product from "../models/products.js";

const router = new Router();

/**
 * GET @description get products
 */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
