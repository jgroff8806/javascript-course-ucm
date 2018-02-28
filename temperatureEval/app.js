/*
  Write a program that evaluates two temperature input values
  Return true if one is less than 0 and the other is greater than 100.
  Return false if one is greater than 0 and the other is greater than 100
*/

function tempEval() {
  var temp1 = parseInt(document.getElementById("temp1").value);
  var temp2 = parseInt(document.getElementById("temp2").value);

  if (temp1 > 0 && temp2 < 100) {
    return false;
  } else if (temp1 < 0 && temp2 > 100) {
    return true;
  }
}

console.log(tempEval());
