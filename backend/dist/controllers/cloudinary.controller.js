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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Configure Cloudinary
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const file = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path; // Path to the file
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
exports.default = {
    uploadImage,
};
