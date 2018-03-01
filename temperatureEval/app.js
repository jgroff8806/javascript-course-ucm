/*
  Write a program that evaluates two temperature input values
  Return true if one is less than 0 and the other is greater than 100.
  Return false if one is greater than 0 and the other is greater than 100
*/

function tempEval(temp1, temp2) {
  if ((temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0)) {
    console.log("true");
    return true;
  } else if ((temp1 > 0 && temp2 > 100) || (temp1 > 100 && temp2 > 0)) {
    console.log("false");
    return false;
  }
}
