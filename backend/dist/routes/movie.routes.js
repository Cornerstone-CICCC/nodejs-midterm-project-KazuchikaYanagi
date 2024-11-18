"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieRouter = (0, express_1.Router)();
movieRouter.get("/", (req, res) => {
    res.status(200).send("hello");
});
exports.default = movieRouter;
