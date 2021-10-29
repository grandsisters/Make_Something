const $input = document.querySelector("#input");
const $form = document.querySelector("#form");
const $logs = document.querySelector("#logs");

const numbers = [];
for (let i = 0; i <= 9; i++) {
  numbers.push[i + 1];
}

const answer = [];
for (let n = 0; n <= 3; n++) {
  const index = Math.floor(Math.random() * (numbers.length - n));
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
const tries = [];
function checkInput(input) {
  if (input.length !== 4) {
    return alert("4자리 숫자를 입력해 주세요.");
  }
  if (new Set(input).size !== 4) {
    return alert("중복되지 않게 입력해 주세요.");
  }
  if (tries.incluedes(input)) {
    return alert("이미 시도한 값입니다.");
  }
  // 위 3가지 조건을 모두 만족하면 true를 반환
  return true;
}

$form.addEventListener("submit", (event) => {
  // form태그의 기본동작인 새로고침을 비활성화 한다.
  event.preventDefault();
  const value = "";
  if (!checkInput(value)) {
    return;
  }
  if (answer.join("") === value) {
    $logs.textContent = "홈런!";
    return;
  }
  if (tries.length >= 9) {
    const message = document.createTextNode(`패배! 정답은 ${answer.join("")}`);
    $logs.appendChild(message);
    return;
  }
});
