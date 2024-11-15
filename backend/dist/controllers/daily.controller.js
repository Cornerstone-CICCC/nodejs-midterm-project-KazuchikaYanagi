"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daily_model_1 = __importDefault(require("../models/daily.model"));
const getDailies = (req, res) => {
    const { userId } = req.session;
    const dailies = daily_model_1.default.findAll(userId);
    console.log(dailies);
    res.json(dailies);
};
const getDailyById = (req, res) => {
    const { id } = req.params;
    const daily = daily_model_1.default.findById(id);
    if (!daily) {
        res.status(404).json({ message: "Daily not found" });
        return;
    }
    res.json(daily);
};
const addDailies = (req, res) => {
    const { userId } = req.session;
    // const { title, content, image, published } = req.body;
    const { title, content, image } = req.body;
    if (!title || !content) {
        res.status(400).json({ message: "Missing title or content." });
        return;
    }
    // const daily = dailyModel.create({ title, content, image, published, userId });
    const daily = daily_model_1.default.create({ title, content, image, userId });
    res.status(201).json(daily);
};
const updateDailyById = (req, res) => {
    const { userId } = req.session;
    const { id } = req.params;
    // const { title, content, published } = req.body;
    const { title, content } = req.body;
    // const article = dailyModel.edit(id, { title, content, published, userId });
    const article = daily_model_1.default.edit(id, { title, content, userId });
    if (!article) {
        res.status(404).json({ message: "Daily not found" });
        return;
    }
    res.json(article);
};
const deleteDailyById = (req, res) => {
    const { userId } = req.session;
    // const { id } = req.body;
    const { id } = req.params;
    // console.log(req.body, req.params);
    console.log(id);
    // const { id } = req.body || req.params;
    const response = daily_model_1.default.delete(id, userId);
    if (!response) {
        res.status(404).json({ message: "Daily not found" });
        return;
    }
    res.status(204).send();
};
exports.default = {
    getDailies,
    getDailyById,
    addDailies,
    updateDailyById,
    deleteDailyById,
};
