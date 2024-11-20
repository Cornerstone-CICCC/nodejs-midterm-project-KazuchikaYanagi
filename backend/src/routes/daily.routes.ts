import { Router } from "express";
import dailyController from "../controllers/daily.controller";
import { checkAuth } from "../middleware/auth";

const dailyRouter = Router();

// dailyRouter.post("/add", checkAuth, dailyController.addDailies);
// dailyRouter.put("/update/:id", checkAuth, dailyController.updateDailyById);
// dailyRouter.delete("/delete/:id", checkAuth, dailyController.deleteDailyById);
// dailyRouter.get("/:id", checkAuth, dailyController.getDailyById);
// dailyRouter.get("/", checkAuth, dailyController.getDailies);

dailyRouter.use(checkAuth);

dailyRouter.post("/add", dailyController.addDailies);
dailyRouter.put("/update/:id", dailyController.updateDailyById);
dailyRouter.delete("/delete/:id", dailyController.deleteDailyById);
dailyRouter.get("/:id", dailyController.getDailyById);
dailyRouter.get("/", dailyController.getDailies);

export default dailyRouter;
