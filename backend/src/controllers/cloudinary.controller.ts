import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (req: Request, res: Response): Promise<void> => {
  try {
    const file = req.file?.path; // Path to the file
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

export default {
  uploadImage,
};
