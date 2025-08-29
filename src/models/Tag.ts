import express from "express";
import mongoose, { model, Model, Schema } from "mongoose";

const tagSchema = new Schema(
  {
    name: { type: String, required: true },
    posts: [{ type: mongoose.Schema.ObjectId, ref: "Post", required: true }],
  },

  {
    timestamps: true,
  }
);
const Tag = model("Tag", tagSchema);

export default Tag;
