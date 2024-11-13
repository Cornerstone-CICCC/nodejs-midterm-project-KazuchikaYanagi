"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const daily_controller_1 = __importDefault(require("../controllers/daily.controller"));
const dailyRouter = (0, express_1.Router)();
dailyRouter.get("/", daily_controller_1.default.getDailies);
dailyRouter.post("/createDaily", daily_controller_1.default.addDailies);
exports.default = dailyRouter;
