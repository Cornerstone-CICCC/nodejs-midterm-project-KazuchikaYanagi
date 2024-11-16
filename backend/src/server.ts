import express, { Request, Response } from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import dailyRouter from "./routes/daily.routes";
import userRouter from "./routes/user.routes";
import cloudinaryRouter from "./routes/cloudinary.routes";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  cookieSession({
    name: "session",
    keys: [
      process.env.COOKIE_SIGN_KEY ?? "jfj4g0hj409g4",
      process.env.COOKIE_ENCRYPT_KEY ?? "oi4jq09gv4jh9q",
    ],
    maxAge: 60 * 60 * 1000,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SIGN_KEY));

// Routes
app.use("/users", userRouter);
app.use("/dailies", dailyRouter);
app.use("/cloudinary", cloudinaryRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send("Access denied");
});

const PORT: number = Number(process.env.PORT || 5000);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
