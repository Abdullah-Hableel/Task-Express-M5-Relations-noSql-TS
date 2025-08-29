import { Request, Response } from "express";
import Post from "../../models/Post";
import Tag from "../../models/Tag";

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate("author").populate("tags");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

const createPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
};

const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author")
      .populate("tags");
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post" });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
};

const addTagToPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { postId, tagId } = req.params;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $addToSet: { tags: tagId } },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      res.status(404).json({ message: "Post not found" });
      return; // stop execution
    }

    const updatedTag = await Tag.findByIdAndUpdate(
      tagId,
      { $addToSet: { posts: postId } },
      { new: true, runValidators: true }
    );

    if (!updatedTag) {
      res.status(404).json({ message: "Tag not found" });
      return;
    }

    const populatedPost = await Post.findById(postId)
      .populate("author")
      .populate("tags");

    res.status(200).json(populatedPost); // ✅ no 'return'
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding tag to post" });
  }
};

export {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  addTagToPost,
};
