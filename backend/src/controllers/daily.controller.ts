import { Request, Response } from "express";
import { Daily } from "../types/daily";
import dailyModel from "../models/daily.model";

const getDailies = (req: Request, res: Response) => {
  const dailies = dailyModel.findAll(id);
  res.json(dailies);
};

const addDailies = (req: Request<{}, {}, Omit<Daily, "id">>, res: Response) => {
  const { title, content, image } = req.body;
  if (!title || !content) {
    res.status(400).json({ message: "Missing title or content." });
    return;
  }
  const daily = dailyModel.create({ title, content, image });
  res.status(200).json(daily);
};

export default {
  getDailies,
  addDailies,
};
