"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daily_model_1 = __importDefault(require("../models/daily.model"));
const getDailies = (req, res) => { };
const addDailies = (req, res) => {
    const { title, content, image } = req.body;
    const daily = daily_model_1.default.create({ title, content, image });
};
exports.default = {
    addDailies,
};
