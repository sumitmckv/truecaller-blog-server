import {NextFunction, Request, Response, Router} from "express";
import client from "./index";

const categoriesRouter = Router();

categoriesRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await client.get("categories").json();
        res.json(response);
    } catch (error) {
        next(error);
    }
});

export default categoriesRouter;