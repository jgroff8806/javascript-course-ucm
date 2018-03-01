/* 
  Write a JavaScript program that sums all elements in array 
  Once you have the sum FIND the average of the sum
*/

var myArray = [1, 2, 5, 15, 25, 50];

// This function calculates the sum
function sum(arr) {
  var arrSum = 0;
  for (var i = 0; i < arr.length; i++) {
    arrSum += myArray[i];
  }
  return arrSum;
}

// This function calculates the average of the sum
function average(sum, totalItems) {
  return sum / totalItems;
}

// This function calculates the sum and find the average of that sum
function calcAverage(arr) {
  var arrSum = sum(arr);
  var arrAvg = average(arrSum, arr.length);
  console.log(arrAvg);
  return arrAvg;
}

// calcAverage(myArray);
