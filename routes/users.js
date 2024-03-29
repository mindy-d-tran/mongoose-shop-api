import { Router } from "express";

import User from "../models/users.js";
import WishList from "../models/wishLists.js";

const router = new Router();

/**
 * GET read users
 */
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.json({msg: error.message});
  }
});
/**
 * POST create user
*/
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    const wishList = await WishList.create({user_id: user._id});
    res.status(201).json({ user, wishList });
  } catch (error) {
    res.json({ msg: "something went wrong", errorMsg: error.message});
  }
});

/**
 * GET /:id 
 * get one user
 */
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.find({ _id: req.params.id });
    if (user) res.json(user);
    else next();
  } catch (error) {
    res.send({msg: "can't find user", errMsg: error.message})
  }
});
/**
 * PUT /:id update user
 */
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateUser);
  } catch (error) {
    console.log(error);
    res.json({ msg: "user not found" });
  }
});
/**
 * DELETE /:id delete user
 */
router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.json({ msg: "User deleted", deleteUser });
  } catch (error) {
    res.json({msg: error.message});
  }
});

export default router;
