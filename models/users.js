import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 20,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, retDoc) {
        delete retDoc.password;
        return retDoc;
      },
    },
  }
);

export default mongoose.model("User", usersSchema);