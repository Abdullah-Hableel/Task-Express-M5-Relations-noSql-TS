import express from "express";
import connectDB from "./database";
import postsRouter from "./api/posts_con_rou/posts.routers";
import notFound from "./middlewares/NotFound";
import errorHandler from "./middlewares/ErrorHandler";
import { log } from "console";
import config from "./config";
import authorRouter from "./api/authors_con_rou/authors.routes";
import tagRouter from "./api/tag_con_rou/tag.router";
const app = express();

app.use(express.json());

app.use("/author", authorRouter);
app.use("/posts", postsRouter);
app.use("/tags", tagRouter);

app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
