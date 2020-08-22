import {NextFunction, Request, Response, Router} from "express";
import client from "./index";
import {POST_FIELDS} from "../config";
import {RelatedPostResponse} from "../model/post";

const postRouter = Router();

postRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {number, page} = req.query;
        let {category, tag} = req.query;
        category = category ? `&category=${category}` : "";
        tag = tag ? `&tag=${tag}` : "";

        const response = await client.get(
            `posts/?number=${number}&page=${page}${category}${tag}&fields=${POST_FIELDS}&order_by=date`
        ).json();
        res.json(response);
    } catch (error) {
        next(error);
    }
});

postRouter.get("/slug", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {slugId} = req.query;
        const response = await client.get(`posts/slug:${slugId}`).json();
        res.json(response);
    } catch (error) {
        next(error);
    }
});

postRouter.get("/:id/related", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const response: RelatedPostResponse = await client.post(`posts/${id}/related`, {json: {size: 3}}).json();
        let posts = [];
        if (response && Array.isArray(response.hits)) {
            const postIds = response.hits.map(h => h.fields.post_id);
            for await (const id of postIds) {
                const post = await client.get(`posts/${id}?fields=${POST_FIELDS}`).json();
                posts.push(post);
            }
        }
        res.json(posts);
    } catch (error) {
        next(error);
    }
});

export default postRouter;