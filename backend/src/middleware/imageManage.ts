// import sharp from "sharp";
// import { Request, Response, NextFunction } from "express";
// import { CloudinaryFile } from "../types/imageManage";
// import { cloudinary } from "../utils/cloudinary";
// import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

// export const uploadToCloudinary = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const files: CloudinaryFile[] = req.files as CloudinaryFile[];
//     if (!files || files.length === 0) {
//       return next(new Error("No files provided"));
//     }
//     const cloudinaryUrls: string[] = [];
//     for (const file of files) {
//       const resizedBuffer: Buffer = await sharp(file.buffer)
//         .resize({ width: 800, height: 600 })
//         .toBuffer();

//       const uploadStream = cloudinary.uploader.upload_stream(
//         {
//           resource_type: "auto",
//           folder: "daily_images",
//         } as any,
//         (
//           err: UploadApiErrorResponse | undefined,
//           result: UploadApiResponse | undefined
//         ) => {
//           if (err) {
//             console.error("Cloudinary upload error:", err);
//             return next(err);
//           }
//           if (!result) {
//             console.error("Cloudinary upload error: Result is undefined");
//             return next(new Error("Cloudinary upload result is undefined"));
//           }
//           cloudinaryUrls.push(result.secure_url);

//           if (cloudinaryUrls.length === files.length) {
//             //All files processed now get your images here
//             req.body.cloudinaryUrls = cloudinaryUrls;
//             next();
//           }
//         }
//       );
//       uploadStream.end(resizedBuffer);
//     }
//   } catch (error) {
//     console.error("Error in uploadToCloudinary middleware:", error);
//     next(error);
//   }
// };

// // export const uploadToCloudinary = async (
// //   req: Request,
// //   res: Response,
// //   next: NextFunction
// // ) => {
// //   try {
// //     const files: CloudinaryFile[] = req.files as CloudinaryFile[];
// //     if (!files || files.length === 0) {
// //       return next(new Error("No files provided"));
// //     }
// //     const cloudinaryUrls: string[] = [];
// //     for (const file of files) {
// //       const resizedBuffer: Buffer = await sharp(file.buffer)
// //         .resize({ width: 800, height: 600 })
// //         .toBuffer();

// //       const uploadStream = cloudinary.uploader.upload_stream(
// //         {
// //           resource_type: "auto",
// //           folder: "daily_images",
// //         } as any,
// //         (
// //           err: UploadApiErrorResponse | undefined,
// //           result: UploadApiResponse | undefined
// //         ) => {
// //           if (err) {
// //             console.error("Cloudinary upload error:", err);
// //             return next(err);
// //           }
// //           if (!result) {
// //             console.error("Cloudinary upload error: Result is undefined");
// //             return next(new Error("Cloudinary upload result is undefined"));
// //           }
// //           cloudinaryUrls.push(result.secure_url);

// //           if (cloudinaryUrls.length === files.length) {
// //             //All files processed now get your images here
// //             req.body.cloudinaryUrls = cloudinaryUrls;
// //             next();
// //           }
// //         }
// //       );
// //       uploadStream.end(resizedBuffer);
// //     }
// //   } catch (error) {
// //     console.error("Error in uploadToCloudinary middleware:", error);
// //     next(error);
// //   }
// // };