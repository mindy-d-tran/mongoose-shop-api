import mongoose from "mongoose";

const cartItem = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const ordersSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
    },
    orderList: {
      type: [cartItem],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", ordersSchema);
