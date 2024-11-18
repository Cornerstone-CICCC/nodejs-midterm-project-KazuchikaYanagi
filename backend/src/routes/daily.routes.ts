import { Request, Response, NextFunction, Router } from "express";
import dailyController from "../controllers/daily.controller";
import { checkAuth } from "../middleware/auth";
// import { upload, uploadToCloudinary } from "../middleware/imageManage";

const dailyRouter = Router();

// dailyRouter.get("/", dailyController.getDailies);
// dailyRouter.post("/createDaily", dailyController.addDailies);

// dailyRouter.use(checkAuth);

dailyRouter.post("/add", checkAuth, dailyController.addDailies);
// dailyRouter.post("/add", dailyController.addDailies);
dailyRouter.put("/update/:id", checkAuth, dailyController.updateDailyById);
dailyRouter.delete("/delete/:id", checkAuth, dailyController.deleteDailyById);
dailyRouter.get("/:id", checkAuth, dailyController.getDailyById);
dailyRouter.get("/", checkAuth, dailyController.getDailies);

// dailyRouter.post("/add", dailyController.addDailies);
// dailyRouter.put("/update/:id", dailyController.updateDailyById);
// dailyRouter.delete("/delete/:id", dailyController.deleteDailyById);
// dailyRouter.get("/:id", dailyController.getDailyById);
// dailyRouter.get("/", dailyController.getDailies);

export default dailyRouter;
