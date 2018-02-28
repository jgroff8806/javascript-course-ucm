// Given two int values, return their sum
// If the two values are the same, return double their sum

/* 
  Function sumDouble() takes in two input values and converts them to integers
  If the two values input are the same, the function gives the sum, doubles it, and displays sumDoubleAnswer as an alert
  If the two values input are different, the function gives the sum and displays sumAnswer as an alert
*/

function sumDouble(num1, num2) {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  if (num1 === num2) {
    var sumDoubleAnswer = 2 * (num1 + num2);
    alert("The double sum is " + sumDoubleAnswer);
  } else if (num1 + num2) {
    var sumAnswer = num1 + num2;
    alert("The sum is " + sumAnswer);
  }
}
