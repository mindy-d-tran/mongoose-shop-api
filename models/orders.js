import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({});

export default mongoose.model('Order', ordersSchema);