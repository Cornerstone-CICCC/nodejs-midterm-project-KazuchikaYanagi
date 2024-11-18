"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class MovieModel {
    constructor() {
        this.todos = [];
    }
    create(newData) {
        const newTodo = Object.assign({ id: (0, uuid_1.v4)() }, newData);
        this.todos.push(newTodo);
        return newTodo;
    }
}
