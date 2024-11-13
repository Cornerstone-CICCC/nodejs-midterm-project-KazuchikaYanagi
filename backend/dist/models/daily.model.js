"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class DailyModel {
    constructor() {
        this.dailies = [];
    }
    findAll(id) {
        const dailies = this.dailies.filter((daily) => daily.id === id);
    }
    create(newData) {
        let date = new Date();
        const newTodo = Object.assign({ id: (0, uuid_1.v4)(), date: date.getFullYear() }, newData);
        this.dailies.push(newTodo);
        return newTodo;
    }
}
exports.default = new DailyModel();
