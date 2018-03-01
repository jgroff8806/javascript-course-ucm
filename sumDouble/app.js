// Given two int values, return their sum
// If the two values are the same, return double their sum

function sumDouble(num1, num2) {
  if (num1 === num2) {
    console.log(2 * (num1 + num2));
    return 2 * (num1 + num2);
  } else {
    console.log(num1 + num2);
    return num1 + num2;
  }
}

sumDouble(2, 2);
