import { Router } from "express";

import Order from "../models/orders.js";

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

export default router;
