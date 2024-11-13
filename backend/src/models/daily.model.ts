import { v4 as uuidv4 } from "uuid";
import { Daily, InputDaily } from "../types/daily";

class DailyModel {
  private dailies: Daily[] = [];

  findAll(id: string) {
    const dailies = this.dailies.filter((daily) => daily.id === id);
  }

  create(newData: InputDaily) {
    let date = new Date();
    const newTodo = {
      id: uuidv4(),
      date: `${date.getHours()}:${date.getMinutes()} ${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
      ...newData,
    };
    this.dailies.push(newTodo);
    console.log(this.dailies);
    return newTodo;
  }
}

export default new DailyModel();
