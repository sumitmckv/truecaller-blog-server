import express from "express";
import cors from "cors";
import {PORT} from "./config";
import postRouter from "./api/post";
import categoriesRouter from "./api/categories";
import tagsRouter from "./api/tags";

const app = express();
app.use(cors())
app.get('/', (req, res) => res.send("Hello from Truecaller Blog API"));
app.use('/api/posts', postRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/tags', tagsRouter);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});