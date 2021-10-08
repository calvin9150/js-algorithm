const test = require("../test");

/*

5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.

10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19

N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합
니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
다.

▣ 출력설명
최대합을 출력합니다

*/

const solution = (input) => {
  let answer = 1;
  let row = 0;
  let column = 0;
  let cross = 0;

  for (let i = 0; i < arr.length; i++) {
    let rowValue = 0;
    let colValue = 0;
    let crossValue = 0;

    input[i].forEach((v) => {
      rowValue += v;
    });

    for (let j = 0; j < arr.length; j++) {
      colValue += input[j][i];
      crossValue += input[j][j];
    }

    if (row < rowValue) row = rowValue;
    if (column < colValue) column = colValue;
    if (cross < crossValue) cross = crossValue;
  }

  for (let i = 0; i < arr.length; i++) {}

  if (row > column) {
    row > cross ? (answer = row) : (answer = cross);
  }

  return answer;
};

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

test(solution(arr), 155);

//해설

function solution2(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution2(arr));
