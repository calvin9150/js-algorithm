const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5 1 6
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let days = 0;

const [a, b, v] = input().split(" ").map(Number);

const getDays = () => {
  days = Math.ceil((v - b) / (a - b));
  console.log(days);
};

getDays();
