import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({});

export default mongoose.model('Product', productsSchema);