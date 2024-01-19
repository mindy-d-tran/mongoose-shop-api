import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    img_src: {
        type: String,
        required: true,
        unique: true
    }
});

export default mongoose.model('Product', productsSchema);