/* 
  Write a program to divide two numbers and print the output 
  by using ceil, floor and round functions

  Create an object that has two parameters (two numbers ex: 5, 10)
  Have three methods: 
  Math.ceil()
  Math.floor()
  Math.round()
*/

var calculate = {
  num1: 5,
  num2: 10,
  ceiling: function() {
    Math.ceil(num1 / num2);
  },
  floor: function() {
    Math.floor(num1 / num2);
  },
  round: function() {
    Math.round(num1 / num2);
  }
};

console.log(calculate);

var calculate = {
  num1: 0,
  num2: 0,
  denom: function(b) {
    if (b > 0) return true;
    return false;
  },
  divide: function(a, b) {
    if (calculate.denom(b)) {
      return a / b;
    } else {
      return "Try Again";
    }
  },
  ceiling: function(a, b) {
    if (calculate.denom(b)) {
      return Math.ceil(a / b);
    } else {
      return "Try again";
    }
  }
};

// console.log(calculate.divide(500, 100));
// console.log(calculate.ceiling(0, 100));
// console.log(calculate.floor(100, 0));
// console.log(calculate.round(0, 600));
