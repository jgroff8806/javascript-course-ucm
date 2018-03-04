// Given two int values, return their sum
// If the two values are the same, return double their sum

var inputNumOne = document.getElementById("num1");
var inputNumTwo = document.getElementById("num2");
var answer = document.getElementById("answer");
var sumAnswer = document.getElementById("sumAnswer");
var sumAnswerDouble = document.getElementById("sumAnswerDouble");

function sumDouble(e) {
  e.preventDefault();

  var num1 = inputNumOne.value;
  var num2 = inputNumTwo.value;
  var sumAnswer = +num1 + +num2;
  var sumAnswerDouble = 2 * (+num1 + +num2);

  if (num1 === num2) {
    answer.innerHTML = sumAnswerDouble;
    return sumAnswerDouble;
  } else {
    answer.innerHTML = sumAnswer;
    return sumAnswer;
  }
}
