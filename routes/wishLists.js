import { Router } from "express";
import WishList from "../models/wishLists.js";

const router = new Router();
/**
 * GET read wishlists
 */
router.get("/", async (req, res) => {
  try {
    const wishLists = await WishList.find({}).populate({path: "orderList.product_id"});
    res.send(wishLists);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
});

/**
 * GET /:id
 * get one user
 */
router.get("/:id", async (req, res) => {
  try {
    const wishList = await WishList.find({ _id: req.params.id }).populate({path: "orderList.product_id"});
    res.json(wishList);
  } catch (error) {
    res.status(404).json({errMsg: error.message });
  }
});
/**
 * PUT /:id add one item to the wish list
 */

router.put("/:id/add/", async (req, res) => {
    try {
      const wishList = await WishList.findById(req.params.id);
      wishList.orderList.push(req.body);
      wishList.save();
      res.json(wishList);
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: error.message});
    }
  });

/**
 * DELETE /:id delete item
 */
router.put("/:id/remove", async (req, res) => {
  try {
    let wishList = await WishList.updateOne({_id: req.params.id}, {
      $pull: { orderList: req.body },
    });
    res.json({ msg: "removed item from wish ", wishList});
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
});

export default router;
