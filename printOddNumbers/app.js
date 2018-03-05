/*
  Write a program to display all odd numbers from 1 to 100
*/

var res = document.getElementById("result");

for (var i = 0; i < 100; i++) {
  // Create paragraph element
  var newPara = document.createElement("p");

  if (i % 2 !== 0) {
    // Stores number
    var number = document.createTextNode(i);
    // Append number to new paragraph element
    newPara.appendChild(number);
    // Adds CSS class to new paragraph element
    newPara.classList.add("number");
    // Append new paragraph element to results div
    res.appendChild(newPara);
  }
}
