const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const list = [];
let answer = "";
for (let i = 0; i < arr.length; i++) {
  if (list.length > 0) {
    if (arr[i].includes("empty")) {
      answer = answer + "0\n";
    }
    if (arr[i].includes("pop")) {
      answer = answer + list.pop() + "\n";
    }
    if (arr[i].includes("top")) {
      answer = answer + list.at(-1) + "\n";
    }
  } else {
    if (arr[i].includes("pop") || arr[i].includes("top")) {
      answer = answer + "-1" + "\n";
    }
    if (arr[i].includes("empty")) {
      answer += "1\n";
    }
  }
  if (arr[i].includes("push")) {
    list.push(arr[i].split(" ")[1]);
  }
  if (arr[i].includes("size")) {
    answer += list.length + "\n";
  }
}
console.log(answer);
