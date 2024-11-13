import { Request, Response, NextFunction, Router } from "express";
import dailyController from "../controllers/daily.controller";

const dailyRouter = Router();

dailyRouter.get("/", dailyController.getDailies);

dailyRouter.post("/createDaily", dailyController.addDailies);

export default dailyRouter;
