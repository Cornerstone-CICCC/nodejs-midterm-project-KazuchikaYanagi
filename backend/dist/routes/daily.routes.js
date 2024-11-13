"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dialyRouter = (0, express_1.Router)();
dialyRouter.get("/", (req, res) => {
    res.status(200).send("hello");
});
exports.default = dialyRouter;
