import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
  addTagToPost,
} from "./posts.controller";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/:postId/:tagId", addTagToPost);

export default router;
