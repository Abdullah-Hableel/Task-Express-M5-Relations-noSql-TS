import mongoose, { model, Model, Schema } from "mongoose";
import { ref } from "process";

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
    posts: [{ type: mongoose.Schema.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

const Author = model("Author", AuthorSchema);

export default Author;
