"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daily_model_1 = __importDefault(require("../models/daily.model"));
const getDailies = (req, res) => {
    const dailies = daily_model_1.default.findAll(id);
    res.json(dailies);
};
const addDailies = (req, res) => {
    const { title, content, image } = req.body;
    if (!title || !content) {
        res.status(400).json({ message: "Missing title or content." });
        return;
    }
    const daily = daily_model_1.default.create({ title, content, image });
    res.status(200).json(daily);
};
exports.default = {
    getDailies,
    addDailies,
};
