import mongoose, { model, Schema } from "mongoose";
import Author from "./Author";
import { ref } from "process";

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "Author",
    required: true,
  },

  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});

const Post = model("Post", postSchema);

export default Post;
