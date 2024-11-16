"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const daily_controller_1 = __importDefault(require("../controllers/daily.controller"));
const auth_1 = require("../middleware/auth");
// import { upload, uploadToCloudinary } from "../middleware/imageManage";
const dailyRouter = (0, express_1.Router)();
// dailyRouter.get("/", dailyController.getDailies);
// dailyRouter.post("/createDaily", dailyController.addDailies);
// dailyRouter.use(checkAuth);
dailyRouter.post("/add", auth_1.checkAuth, 
// upload.array("images", 5),
daily_controller_1.default.addDailies);
// dailyRouter.post("/add", dailyController.addDailies);
dailyRouter.put("/update/:id", auth_1.checkAuth, daily_controller_1.default.updateDailyById);
dailyRouter.delete("/delete/:id", auth_1.checkAuth, daily_controller_1.default.deleteDailyById);
dailyRouter.get("/:id", auth_1.checkAuth, daily_controller_1.default.getDailyById);
dailyRouter.get("/", auth_1.checkAuth, daily_controller_1.default.getDailies);
// dailyRouter.post("/add", dailyController.addDailies);
// dailyRouter.put("/update/:id", dailyController.updateDailyById);
// dailyRouter.delete("/delete/:id", dailyController.deleteDailyById);
// dailyRouter.get("/:id", dailyController.getDailyById);
// dailyRouter.get("/", dailyController.getDailies);
exports.default = dailyRouter;
