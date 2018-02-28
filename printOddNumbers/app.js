/*
  Write a program to display all odd numbers from 1 to 100
*/

var i;
for (i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    document.getElementById("numLoop").innerHTML += i + "<br>";
  }
}
