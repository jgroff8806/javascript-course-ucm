// Write a program to find average of all elements in an array
var myArray = [5, 10, 28, 36, 78, 128];

// Finds the sum of the array
var sum = function(arr) {
  var arrSum = 0;
  for (var i = 0; i < myArray.length; i++) {
    arrSum += myArray[i];
  }
  return arrSum;
};

// Finds the average of the sum
var average = function(sum, arrayItems) {
  return sum / arrayItems;
};

// Returns the results of the sum and average of the array
var calcAverage = function(arr) {
  var arrSum = sum(arr);
  var arrayAvg = average(arrSum, arr.length);

  console.log(arrayAvg);
  return arrayAvg;
};

calcAverage(myArray);
