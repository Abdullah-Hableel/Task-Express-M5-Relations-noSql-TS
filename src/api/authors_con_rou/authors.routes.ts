import express from "express";
import { createAuthor, getAllAuthor } from "./authors.controllers";

const router = express.Router();

router.post("/", createAuthor);
router.get("/", getAllAuthor);

export default router;
