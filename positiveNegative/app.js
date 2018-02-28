// posNeg Exercise
// Given 2 int values, return true if one is negative and one is positive.
// Except if the parameter "negative" is true, then return true only if both are negative.

function evalPosNeg(num1, num2, negative) {
  if (negative && num1 < 0 && num2 < 0) {
    return true;
  } else if (!negative && ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0))) {
    return false;
  }
  return false;
}

/*
  document.getElementById("evalButton").addEventListener("click", evalPosNeg()).innerHTML = "evalPosNeg()";
*/
