import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
    },
    orderList: {
      type: [{ 
        product_id: { 
            type: mongoose.Schema.ObjectId, 
            ref: "Product" 
        },
        quantity: {
            type: Number, 
            required: true
        }
    }],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", ordersSchema);
