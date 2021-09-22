/**
 * @param {string} msg
 * @param {'red' | 'skyblue' | 'purple'} color
 * @returns {string}
 */
const generateColorMessage = (msg, color) => {
  switch (color) {
    case "red":
      return `\u001b[91m${msg}\u001b[0m`;
    case "skyblue":
      return `\u001b[94m${msg}\u001b[0m`;
    case "purple":
      return `\u001b[95m${msg}\u001b[0m`;
    default:
      return msg;
  }
};

const PASS = generateColorMessage("PASS", "skyblue");
const FAIL = generateColorMessage("FAIL", "red");

module.exports = (() => {
  let caseNumber = 1;
  return (answer, expectedValue) => {
    if (!answer) {
      return console.log(
        generateColorMessage("Answer have empty value!", "red")
      );
    }
    if (!expectedValue) {
      return console.log(
        generateColorMessage("ExpectedValue parameter have empty value!", "red")
      );
    }

    let result;
    switch (typeof answer) {
      case "string":
      case "number":
        result = String(answer) === String(expectedValue) ? PASS : FAIL;
        break;
      case "object":
        result =
          JSON.stringify(answer) === JSON.stringify(expectedValue)
            ? PASS
            : FAIL;
        break;
      default:
        console.log(
          generateColorMessage("Your first key have wrong type!", "red")
        );
        return;
    }
    console.log(
      generateColorMessage(`${caseNumber}번째 케이스`, "purple"),
      `=> ${result}`
    );
    console.log(`리턴 값: ${answer}`);
    console.log(`기댓 값: ${expectedValue}`);
    caseNumber++;
  };
})();
