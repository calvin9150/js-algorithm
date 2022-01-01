const test = require("../test");

/*

유효한 팰린드롬

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을
작성하세요.

단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
알파벳 이외의 문자들의 무시합니다.

▣ 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

▣ 출력설명
첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

▣ 입력예제 1
found7, time: study; Yduts; emit, 7Dnuof

▣ 출력예제
YES

*/

const solution = (input) => {
  let answer = "";

  const filteredInput = input.replace(/[1-9]|[" "]|[^\w\sㄱ-힣]|[\_]/g, "");
  const front = filteredInput.slice(0, filteredInput.length / 2).toUpperCase();
  const back = filteredInput
    .slice(filteredInput.length / 2, filteredInput.length)
    .split("")
    .reverse()
    .join("")
    .toUpperCase();

  front === back ? (answer = "YES") : (answer = "NO");

  return answer;
};

const input = "found7, time: study; Yduts; emit, 7Dnuof";
test(solution(input), "YES");

// 해설
function solution2(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution2(str));
