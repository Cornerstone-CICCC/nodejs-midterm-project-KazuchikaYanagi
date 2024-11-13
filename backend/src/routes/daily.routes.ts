import { Request, Response, NextFunction, Router } from "express";

const dialyRouter = Router();

dialyRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("hello");
});

export default dialyRouter;
