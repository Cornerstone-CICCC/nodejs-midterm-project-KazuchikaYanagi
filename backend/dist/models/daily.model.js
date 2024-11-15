"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class DailyModel {
    constructor() {
        this.dailies = [];
    }
    findAll(userId) {
        const dailies = this.dailies.filter((daily) => daily.userId === userId);
        return dailies;
    }
    findById(id) {
        const daily = this.dailies.find((daily) => daily.id === id);
        if (!daily)
            return undefined;
        return daily;
    }
    create(newData) {
        let date = new Date();
        const newTodo = Object.assign({ id: (0, uuid_1.v4)(), date: `${date.getHours()}:${date.getMinutes()} ${date.getFullYear()}-${date.getMonth()}-${date.getDay()}` }, newData);
        this.dailies.push(newTodo);
        console.log(this.dailies);
        return newTodo;
    }
    edit(id, newData) {
        const index = this.dailies.findIndex((daily) => daily.id === id);
        if (index === -1)
            return undefined;
        if (this.dailies[index].userId !== newData.userId)
            return undefined;
        const updatedDaily = Object.assign(Object.assign({}, this.dailies[index]), newData);
        this.dailies[index] = updatedDaily;
        return updatedDaily;
    }
    delete(id, userId) {
        const index = this.dailies.findIndex((daily) => daily.id === id && daily.userId === userId);
        if (index === 1)
            return false;
        this.dailies.splice(index, 1);
        return true;
    }
}
exports.default = new DailyModel();
