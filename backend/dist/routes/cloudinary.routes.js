"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cloudinary_controller_1 = __importDefault(require("../controllers/cloudinary.controller"));
const auth_1 = require("../middleware/auth");
const multer_1 = __importDefault(require("multer"));
const cloudinaryRouter = (0, express_1.Router)();
const storage = multer_1.default.diskStorage({});
const upload = (0, multer_1.default)({ storage });
cloudinaryRouter.post("/upload", auth_1.checkAuth, upload.single("image"), cloudinary_controller_1.default.uploadImage);
cloudinaryRouter.put("/update", auth_1.checkAuth, cloudinary_controller_1.default.updateImage);
cloudinaryRouter.get("/retrieve", auth_1.checkAuth, cloudinary_controller_1.default.retrieveImage);
exports.default = cloudinaryRouter;
