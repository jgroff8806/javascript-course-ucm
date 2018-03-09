// Example of an object
// This object has a method inside of it

var menu = {
  food: "burger",
  drink: "pepsi",
  side: "fries"
};

var output = "";
for (var property in menu) {
  output += property + ": " + " " + menu[property] + "\n" + "\n";
}
alert(output);

// console.log(Object.keys(menu));

/*
var printMenu = function(menu) {
  return Object.getOwnPropertyNames(menu).filter(function(i) {
    return typeof menu[i] == "function";
  });
};
*/
