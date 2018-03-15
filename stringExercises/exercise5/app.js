/*
  Given a string, return true if it ends in "ly"
  endsLy("oddly") → true
  endsLy("y") → false
  endsLy("oddy") → false
*/

function endsLy(str) {
  // Gets the string length and stores it in a variable
  var stringLength = str.length;
  if (stringLength >= 2) {
    return str.substring(str.length - 2) === "ly";
  } else {
    return false;
  }
}

console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddy"));
