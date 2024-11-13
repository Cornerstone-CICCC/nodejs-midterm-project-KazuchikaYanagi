import { v4 as uuidv4 } from "uuid";
import { Daily } from "../types/daily";

class DailyModel {
  private dailies: Daily[] = [];

  findAll(id: string) {
    const dailies = this.dailies.filter((daily) => daily.id === id);
  }

  create(newData: Partial<Daily>) {
    let date = new Date();
    const newTodo = {
      id: uuidv4(),
      date: date.getFullYear(),
      ...newData,
    };
    this.dailies.push(newTodo);
    return newTodo;
  }
}

export default new DailyModel();
