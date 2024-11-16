import { Router, Request, Response } from "express";
import cloudinaryController from "../controllers/cloudinary.controller";
import { checkAuth } from "../middleware/auth";
import multer from "multer";

const cloudinaryRouter = Router();

const storage = multer.diskStorage({});
const upload = multer({ storage });

cloudinaryRouter.post(
  "/upload",
  checkAuth,
  upload.single("image"),
  cloudinaryController.uploadImage
);

export default cloudinaryRouter;
