const [NM, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [n, current] = NM.split(" ").map((str) => +str);
const graph = arr.map((str) => +str).reverse();
let answer = 0;
graph.forEach((element) => {
  answer += Math.floor(current / element);
  current = current % element;
});
console.log(answer);
