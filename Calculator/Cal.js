// 첫번째 연산될 숫자, 기호(operator), 두번째 연산될 숫자
let numOne = "";
let operator = "";
let numTwo = "";

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

// const onClickNumber = (number) => {
//    operator 변수에 값이 할당되어 있는가?
//    예 -> 두번째 숫자가 들어갈 차례
//    아니오 -> 첫번째 숫자가 들어갈 차례
//   return () => {
//     if (operator) {
//       numTow += number;  operator에 값이 할당되어 있다
//     } else {
//       numOne += number;  operator에 값이 할당되어 있지 않다
//     }
//     $result.value += number;
//   };
// };

// onClicknumber()에서 실행문을 리턴하는 이유는
// document.querySelector("#num-0").addEventListener("click", '이자리');
// '이자리'에는 함수가 와야하는데
// 함수가 들어가야 하는 자리에는 return값이 있는 함수가 들어가야한다.
// 변경전 함수인

// const onClickNumber = (number) => {
//     if (operator) {
//       numTow += number;
//     } else {
//       numOne += number;
//     }
//     $result.value += number;
// };

// 이 함수에는 return값이 생략되어 있다.
// return값이 생략된 함수는 undefined를 반환(return)한다.
// 때문에 의도한 대로 동작하지 않는것이다.
// 실행문을 return 함으로써 의도한대로 돌아가게 하기 위함이다.
// 결과적으로 함수가 함수를 return 하게 되는데
// 이러한 함수를 고차함수(high order function)라고 부른다.

// const onClickNumber = (number) => () =>{
//     if (operator) {
//       numTow += number;
//     } else {
//       numOne += number;
//     }
//     $result.value += number;
// };
// 또한 화살표 함수는 중괄호()와 return이 만나면 생략가능하므로
// 위와 같이 코드량을 조금더 줄일 수 있다.

// 고차함수를 사용하지 않고
// target.textContent를 이용하는 방법도 있다
const onClickNumber = (event) => {
  if (operator) {
    if (!numTwo) {
      // numTwo가 없다면 화면을 비워라
      // numTwo는 현재 '' 상태이니, false다.
      // 그러므로 !를 추가함으로써 true로 만든다.
      // numOne 입력 하고 연산자 입력후에 numTwo를 입력하게 되면 화면이 지워지고 numTwo만 남게된다
      $result.value = "";
    }
    numTwo += event.target.textContent;
  } else {
    numOne += event.target.textContent;
  }
  $result.value += event.target.textContent;
};
// 위와같이 함수의 실행문을 변경헀을시
// document.querySelector("#num-0").addEventListener("click", onClickNumber); 와 같이
// document.querySelector("#num-0")가 event.target이 되고
// textContent는 0이므로
// onClickNumber의 매개변수를 넣어주지 않아도 된다.

// operator 입력 함수
const onClickOperator = (op) => () => {
  // 고차함수, return과 {}이 생략되었다.
  if (numOne) {
    //numOne이 비어있다면 false다.
    operator = op;
    $operator.value = op;
  } else {
    alert("숫자를 먼저 입력하세요.");
  }
};

document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

document.querySelector("#plus").addEventListener("click", onClickOperator("+"));

document.querySelector("#minus").addEventListener("click", onClickOperator("-"));

document.querySelector("#divide").addEventListener("click", onClickOperator("/"));

document.querySelector("#multiply").addEventListener("click", onClickOperator("*"));

document.querySelector("#calculator").addEventListener("click", () => {
  if (numTwo) {
    switch (operator) {
      case "+":
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
      case "-":
        $result.value = numOne - numTwo;
        break;
      case "/":
        $result.value = numOne / numTwo;
        break;
      case "*":
        $result.value = numOne * numTwo;
        break;
      default:
        break;
    }
  } else {
    alert("숫자를 먼저 입력하세요.");
  }
});

document.querySelector("#clear").addEventListener("click", () => {
  numOne = "";
  operator = "";
  numTwo = "";
  $operator.value = "";
  $result.value = "";
});
