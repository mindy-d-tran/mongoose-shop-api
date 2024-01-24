import mongoose from "mongoose";

const wishlistItem = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  },
  { _id: false }
);

const wishListsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
    },
    wish_list: {
      type: [wishlistItem],
    },
  },
);

export default mongoose.model("WishList", wishListsSchema);
