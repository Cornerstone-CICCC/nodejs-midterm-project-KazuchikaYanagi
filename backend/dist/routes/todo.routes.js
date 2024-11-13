"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoRouter = (0, express_1.Router)();
todoRouter.get("/", (req, res) => {
    res.status(200).send("hello");
});
exports.default = todoRouter;
