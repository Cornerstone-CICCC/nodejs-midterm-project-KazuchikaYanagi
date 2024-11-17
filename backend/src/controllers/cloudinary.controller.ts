import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";
// dotenv.config();

const uploadImage = async (req: Request, res: Response): Promise<void> => {
  try {
    // const file = req.file?.path; // Path to the file
    const file = req.file?.path; // Path to the file
    console.log(file);
    console.log(req.file);
    if (!file) {
      res.status(400).json({ success: false, message: "No file uploaded" });
      return;
    }
    const result = await cloudinary.uploader.upload(file, {
      folder: "uploads", // Optional: Cloudinary folder
    });
    res.status(200).json({
      success: true,
      message: "File uploaded successfully!",
      result,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: (err as Error).message });
  }
};

const retrieveImage = async (req: Request, res: Response) => {
  try {
    const resources = await cloudinary.api.resources({
      type: "upload",
      prefix: "uploads", // Optional: Filter by folder
    });
    res.status(200).json({
      success: true,
      resources,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
};

export default {
  uploadImage,
  retrieveImage,
};
