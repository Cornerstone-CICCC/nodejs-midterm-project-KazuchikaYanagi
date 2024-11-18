import { v4 as uuidv4 } from "uuid";
import { Daily } from "../types/daily";

class DailyModel {
  private dailies: Daily[] = [];

  findAll(userId: string) {
    const dailies = this.dailies.filter((daily) => daily.userId === userId);
    return dailies;
  }

  findById(id: string): Daily | undefined {
    const daily = this.dailies.find((daily) => daily.id === id);
    if (!daily) return undefined;
    return daily;
  }

  create(newData: Omit<Daily, "id" | "date">) {
    let date = new Date();
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minute =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    const newTodo = {
      id: uuidv4(),
      date: `${hour}:${minute} ${date.getFullYear()}/${month}/${day}`,
      ...newData,
    };
    this.dailies.push(newTodo);
    console.log(this.dailies);
    return newTodo;
  }

  edit(id: string, newData: Partial<Daily>): Daily | undefined {
    let date = new Date();
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minute =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    const index = this.dailies.findIndex((daily) => daily.id === id);
    if (index === -1) return undefined;
    if (this.dailies[index].userId !== newData.userId) return undefined;
    const updatedDaily = {
      ...this.dailies[index],
      date: `${hour}:${minute} ${date.getFullYear()}/${month}/${day}`,
      ...newData,
    };
    this.dailies[index] = updatedDaily;
    return updatedDaily;
  }

  delete(id: string, userId: string): boolean {
    const index = this.dailies.findIndex(
      (daily) => daily.id === id && daily.userId === userId
    );
    if (index === 1) return false;
    this.dailies.splice(index, 1);
    return true;
  }
}

export default new DailyModel();
