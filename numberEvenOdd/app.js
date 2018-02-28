/*
  Create a function to evaluate whether a given input is even or odd
  Output the result 
*/

// Function evaluates whether a value input by the user is even or odd
function evalNum() {
  var num = parseInt(document.getElementById("num").value);
  if (num % 2 === 0) {
    alert("The number you entered is Even");
  } else {
    alert("The number you entered is Odd");
  }
}
