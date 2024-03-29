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
    res.send({ msg: "can't find user" });
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
    res.json({ msg: "something went wrong", errMsg: error.message });
  }
});

/**
 * GET /:id
 */
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else next();
  } catch (error) {
    res.json({ msg: "something went wrong", errMsg: error.message });
  }
});

/**
 * PUT update product
 */
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (product) res.json(product);
  } catch (error) {
    console.log(error);
    res.json({ msg: "can't find product", errMsg: error.message });
  }
});
/**
 * DELETE delete product
 */
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: "product deleted", product });
  } catch (error) {
    console.log(error);
    res.json({ msg: "can't find product", errMsg: error.message });
  }
});

export default router;
