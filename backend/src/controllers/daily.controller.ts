import { Request, Response } from "express";
import { Daily } from "../types/daily";
import dailyModel from "../models/daily.model";

const getDailies = (req: Request, res: Response) => {};

const addDailies = (req: Request<{}, {}, Omit<Daily, "id">>, res: Response) => {
  const { title, content, image } = req.body;
  const daily = dailyModel.create({ title, content, image });
};

export default {
  addDailies,
};
