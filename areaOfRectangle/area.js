function area() {
  var areaHeight = parseInt(document.getElementById("height").value);
  var areaWidth = parseInt(document.getElementById("width").value);
  var areaCalc = areaHeight * areaWidth;
  alert("The area of the rectangle is " + areaCalc);
}

function perimeter() {
  var perHeight = parseInt(document.getElementById("height").value);
  var perWidth = parseInt(document.getElementById("width").value);
  var perCalc = 2 * (perHeight + perWidth);
  alert("The perimeter of the rectangle is " + perCalc);
}
