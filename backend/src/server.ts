import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import dailyRouter from "./routes/daily.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/dailies", dailyRouter);

const PORT: number = Number(process.env.PORT || 5000);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
