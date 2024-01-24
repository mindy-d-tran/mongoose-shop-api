import { Router } from "express";
import WishList from "../models/wishLists";

const router = new Router();
/**
 * GET read wishlists
 */
router.get("/", async (req, res) => {
  try {
    const wishLists = await WishList.find({});
    res.send(wishLists);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

/**
 * GET /:id
 * get one user
 */
router.get("/:id", async (req, res) => {
  try {
    const wishList = await WishList.find({ _id: req.params.id });
    res.json(wishList);
  } catch (error) {
    res.json({ msg: "can't find wish list", errMsg: error.message });
  }
});
/**
 * PUT /:id update wish list
 */
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateWishList = await WishList.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateWishList);
  } catch (error) {
    console.log(error);
    res.json({ msg: "wish list not found" });
  }
});
router.put("/:id/add", async (req, res) => {
    try {
      const wishList = await WishList.findById(req.params);
      wishList.orderList.push(req.body);
      wishList.save();
      res.json(wishList);
    } catch (error) {
      console.log(error);
      res.json({ msg: "wish list not found" });
    }
  });
/**
 * DELETE /:id delete item
 */
router.put("/:id/remove", async (req, res) => {
  try {
    const wishList = await WishList.findById(req.params);
    res.json({ msg: "User deleted", deleteUser });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

export default router;
