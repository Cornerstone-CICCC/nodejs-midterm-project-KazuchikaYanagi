import { Request, Response } from "express";
import { Daily } from "../types/daily";
import dailyModel from "../models/daily.model";

const getDailies = (req: Request, res: Response) => {
  const { userId } = req.session;
  const dailies = dailyModel.findAll(userId);
  console.log(dailies);
  res.json(dailies);
};

const getDailyById = (req: Request<{ id: string }>, res: Response): void => {
  const { id } = req.params;
  const daily = dailyModel.findById(id);
  if (!daily) {
    res.status(404).json({ message: "Daily not found" });
    return;
  }
  res.json(daily);
};

const addDailies = (req: Request<{}, {}, Omit<Daily, "id">>, res: Response) => {
  const { userId } = req.session;
  const { title, content, image } = req.body;
  if (!title || !content) {
    res.status(400).json({ message: "Missing title or content." });
    return;
  }
  const daily = dailyModel.create({ title, content, image, userId });
  res.status(201).json(daily);
};

// const addDailies = (req: Request<{}, {}, Omit<Daily, "id">>, res: Response) => {
//   const { userId } = req.session;
//   // const { title, content, image, published } = req.body;
//   const { title, content, image } = req.body;
//   if (!title || !content) {
//     res.status(400).json({ message: "Missing title or content." });
//     return;
//   }
//   // const daily = dailyModel.create({ title, content, image, published, userId });
//   const daily = dailyModel.create({ title, content, image, userId });
//   res.status(201).json(daily);
// };

const updateDailyById = (
  req: Request<{ id: string }, {}, Partial<Daily>>,
  res: Response
): void => {
  const { userId } = req.session;
  const { id } = req.params;
  // const { title, content, published } = req.body;
  const { title, content, image } = req.body;
  console.log(req.body);
  // const article = dailyModel.edit(id, { title, content, published, userId });
  const article = dailyModel.edit(id, { title, content, image, userId });
  if (!article) {
    res.status(404).json({ message: "Daily not found" });
    return;
  }
  res.json(article);
};

const deleteDailyById = (req: Request<{ id: string }>, res: Response) => {
  const { userId } = req.session;
  // const { id } = req.body;
  const { id } = req.params;
  // console.log(req.body, req.params);
  console.log(id);
  // const { id } = req.body || req.params;
  const response = dailyModel.delete(id, userId);
  if (!response) {
    res.status(404).json({ message: "Daily not found" });
    return;
  }
  res.status(204).send();
};

export default {
  getDailies,
  getDailyById,
  addDailies,
  updateDailyById,
  deleteDailyById,
};
