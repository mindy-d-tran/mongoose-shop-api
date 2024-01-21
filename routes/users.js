import { Router } from "express";

import User from "../models/users.js";

const router = new Router();

/**
 * GET read users
 */
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error.message);
  }
});
/**
 * POST create user
 */
router.post('/', async(req,res)=>{
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.log(error.message);
    }
})
/**
 * PUT /:id update user
 */
router.put('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.json(updateUser);
    } catch (error) {
        console.log(error);
        res.json({msg: "user not found"});
    }
})
/**
 * DELETE /:id delete user
 */
router.delete('/:id', async(req,res)=>{
  try {
    const deleteUser = await User.findByIdAndDelete(req.params);
    res.json({msg: "User deleted", deleteUser})
  } catch (error) {
    console.log(error);
  }
});

export default router;
