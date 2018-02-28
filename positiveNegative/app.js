// posNeg Exercise
// Given 2 int values, return true if one is negative and one is positive.
// Except if the parameter "negative" is true, then return true only if both are negative.

function evalPosNeg(num1, num2) {
  // return true if one value is negative and one is positive
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    return true;
    // return true if both are negative
  } else if (num1 < 0 && num2 < 0) {
    return true;
    // return false if neither are
  } else {
    return false;
  }
}

/*
  document.getElementById("evalButton").addEventListener("click", evalPosNeg()).innerHTML = "evalPosNeg()";
*/
