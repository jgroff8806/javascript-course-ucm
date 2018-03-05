/*
  Write a program that evaluates two temperature input values
  Return true if one is less than 0 and the other is greater than 100.
  Return false if one is greater than 0 and the other is greater than 100
*/

var inputTempOne = document.getElementById("temp1");
var inputTempTwo = document.getElementById("temp2");
var result = document.getElementById("result");

function tempEval(e) {
  e.preventDefault();

  var temp1 = inputTempOne.value;
  var temp2 = inputTempTwo.value;
  // Return true if one temperature value is less than 0 and the other is greater than 100
  if ((temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0)) {
    result.innerHTML = "True";
    return true;
    // Return false if one temperature value is greater than 0 and the other is greater than 100
  } else if ((temp1 > 0 && temp2 > 100) || (temp1 > 100 && temp2 > 0)) {
    result.innerHTML = "False";
    return false;
  }
}
