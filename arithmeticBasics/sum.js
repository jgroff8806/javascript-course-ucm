/*
  Create functions to solve basic arithmetic 
  Such as addition, subtraction, multiplicatin and division
*/

// Addition function
function sum() {
  var addNum1 = parseInt(document.getElementById("addNum1").value);
  var addNum2 = parseInt(document.getElementById("addNum2").value);
  var sumAnswer = addNum1 + addNum2;
  alert("The sum is " + sumAnswer);
}

// Subtraction function
function difference() {
  var subNum1 = parseInt(document.getElementById("subNum1").value);
  var subNum2 = parseInt(document.getElementById("subNum2").value);
  var subAnswer = subNum1 - subNum2;
  alert("The difference is " + subAnswer);
}

// Multiplication function
function product() {
  var multNum1 = parseInt(document.getElementById("multNum1").value);
  var multNum2 = parseInt(document.getElementById("multNum2").value);
  var multAnswer = multNum1 * multNum2;
  alert("The product is " + multAnswer);
}

// Division function
function quotient() {
  var divNum1 = parseInt(document.getElementById("divNum1").value);
  var divNum2 = parseInt(document.getElementById("divNum2").value);
  var divAnswer = divNum1 / divNum2;
  alert("The quotient is " + divAnswer);
}
