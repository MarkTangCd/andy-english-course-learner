import lesson14_1 from "./14-1/data";
import lesson10_5 from "./10-5/data";

const list = [lesson14_1, lesson10_5];

export function getLessonByID(id: number) {
  return list.filter((item) => item.id === id);
}

export default list;
