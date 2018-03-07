function createTable() {
  // Prompts the user to enter number of rows and columns and stores them in rowNumber and columnNumber
  rowNumber = window.prompt("Enter number of rows:", 1);
  columnNumber = window.prompt("Enter number of columns:", 1);
  // Takes the value of the input rowNumber and inserts the new row(s) in the table element "myTable"
  for (var r = 0; r < parseInt(rowNumber, 10); r++) {
    var x = document.getElementById("myTable").insertRow(r);
    // Takes the value of the input columnNumber and inserts the new column(s) and their cell(s)
    for (var c = 0; c < parseInt(columnNumber, 10); c++) {
      var y = x.insertCell(c);
      // Appends the values of rowNumber and columnNumber to the cells on the myTable element
      y.innerHTML = "Row-" + r + " Column-" + c;
    }
  }
}
