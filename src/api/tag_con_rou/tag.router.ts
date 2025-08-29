import { createTag, getAllTags } from "./tag.controller";
import express from "express";

const router = express.Router();

router.get("/", getAllTags);
router.post("/", createTag);

export default router;
