// Positive Negative Exercise
// Given 2 values, return true if one is negative and one is positive
// Except if the parameter "negative" is true, then return true only if both are negative

function evalPosNeg(num1, num2, negative) {
  // return true if the parameter 'negative' is true
  // and both number parameters are negative
  if (negative === true && num1 < 0 && num2 < 0) {
    console.log("true");
    return true;
  }

  // return true if one value is negative and one is positive
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    console.log("true");
    return true;
  }

  console.log("false");
  return false;
}

// create a function to change
var funButton = function() {};
