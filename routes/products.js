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
    res.send({msg: "can't find user"});
  }
});

/**
 * POST @description add products
 */
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.send(product);
  } catch (error) {
    res.json({msg: "something went wrong", errMsg: error.message});
  }
});
export default router;
