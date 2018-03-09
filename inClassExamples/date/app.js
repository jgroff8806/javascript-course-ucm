// Output date in U.S. format (dd / mmm / yyyy)

var dt = new Date();
var day = dt.getDate();
var month = dt.getMonth() + 1; // January is month 1
var year = dt.getFullYear();

if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = "0" + month;
}

dt = month + "/" + day + "/" + year;

console.log(dt);

// Another way to do it

/*
var dt = new Date();
var month = dt.getMonth() + 1;
var day = dt.getDate();
var year = dt.getFullYear();

console.log(month + "/" + day + "/" + year);
*/
