import {NextFunction, Request, Response, Router} from "express";
import client from "./index";

const tagsRouter = Router();

tagsRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await client.get("tags?number=10&order=DESC&order_by=count").json();
        res.json(response);
    } catch (error) {
        next(error);
    }
});

export default tagsRouter;