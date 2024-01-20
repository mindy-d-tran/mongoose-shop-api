import { Router } from "express";

import User from "../models/users.js";

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
