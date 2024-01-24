import { Router } from "express";

import Order from "../models/orders.js";
import Product from "../models/products.js";
import User from "../models/users.js";

const router = new Router();
/**
 * GET @description get orders
 */
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    console.log(error.message);
  }
});

/**
 * POST add order
 */
router.post("/", async (req, res) => {
  try {
    const user = await User.findById(req.body.user_id);
    const product = await Product.find().in({product_id: req.body.orderList})
    const order = await Order.create(req.body);
    res.send([user, order]);
  } catch (error) {
    res.send({ msg: "something went wrong", errMsg: error.message });
  }
});

/**
 * GET @description get orders
 */
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
