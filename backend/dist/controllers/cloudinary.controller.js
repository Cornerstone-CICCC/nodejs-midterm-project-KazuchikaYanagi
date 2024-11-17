"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
// import dotenv from "dotenv";
// dotenv.config();
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // const file = req.file?.path; // Path to the file
        const file = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path; // Path to the file
        console.log(file);
        console.log(req.file);
        if (!file) {
            res.status(400).json({ success: false, message: "No file uploaded" });
            return;
        }
        const result = yield cloudinary_1.v2.uploader.upload(file, {
            folder: "uploads", // Optional: Cloudinary folder
        });
        res.status(200).json({
            success: true,
            message: "File uploaded successfully!",
            result,
        });
    }
    catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});
const retrieveImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resources = yield cloudinary_1.v2.api.resources({
            type: "upload",
            prefix: "uploads", // Optional: Filter by folder
        });
        res.status(200).json({
            success: true,
            resources,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
exports.default = {
    uploadImage,
    retrieveImage,
};
