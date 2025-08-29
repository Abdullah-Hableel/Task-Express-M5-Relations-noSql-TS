import { Request, Response } from "express";
import Tag from "../../models/Tag";

const getAllTags = async (req: Request, res: Response): Promise<void> => {
  try {
    const tags = await Tag.find().populate({
      path: "posts",
      populate: { path: "author" },
    });

    res.status(200).json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching tags" });
  }
};

const createTag = async (req: Request, res: Response): Promise<void> => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating tag" });
  }
};

export { getAllTags, createTag };
