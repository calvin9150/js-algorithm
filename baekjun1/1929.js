const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3 16
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const [a, b] = input().split(" ").map(Number);

const getPrimeNum = () => {
  for (let i = a; i <= b; i++) {
    for (let j = 2; j <= i; j++) {
      if (j === i) {
        console.log(i);
      }
      if (i % j === 0) {
        break;
      }
    }
  }
};

getPrimeNum();
