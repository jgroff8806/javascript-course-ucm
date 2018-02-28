/*
  Create two functions to calculate the area and circumference of a circle
  Output those values
*/

// Calculate area of circle function
function area() {
  var radius = parseInt(document.getElementById("radius").value);
  var areaCalc = Math.PI * radius * radius;
  alert("The area of the circle is " + areaCalc.toFixed(2));
}

// Calculate circumference of circle function
function circumference() {
  var radius = parseInt(document.getElementById("radius").value);
  var circCalc = 2 * radius * Math.PI;
  alert("The circumference of the circle is " + circCalc.toFixed(2));
}
