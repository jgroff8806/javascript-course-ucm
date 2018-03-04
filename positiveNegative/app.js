// Positive Negative Exercise
// Given 2 values, return true if one is negative and one is positive
// Except if the parameter "negative" is true, then return true only if both are negative

var inputNumOne = document.getElementById('num1');
var inputNumTwo = document.getElementById('num2');
var negativeCheck = document.getElementById('negativeCheck');
var answer = document.getElementById('answer');

function evalPosNeg(e) {
  e.preventDefault();

  var num1 = inputNumOne.value;
  var num2 = inputNumTwo.value;
  var isNegativeChecked = negativeCheck.checked;

  // return true if the parameter 'negative' is true
  // and both number parameters are negative
  if (isNegativeChecked === true && num1 < 0 && num2 < 0) {
    answer.innerHTML = 'True';
    return true;
  }

  // return true if one value is negative and one is positive
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    answer.innerHTML = 'True';
    return true;
  }

  answer.innerHTML = 'False';
  return false;
}
