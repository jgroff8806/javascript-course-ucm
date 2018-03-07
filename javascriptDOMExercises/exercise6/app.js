var changeContent = function() {
  // Grabs input from user and stores it into rowNumber, columnNumber and newCellContent
  rowNumber = window.prompt("Enter the Row number: (0, 1, or 2)", "0");
  columnNumber = window.prompt("Enter the Column number: (0 or 1)", "0");
  newCellContent = window.prompt("Enter the new Cell content:");

  var myTable = document.getElementById("myTable").rows[parseInt(rowNumber, 10)]
    .cells;
  // Changes the content of myTable with the newCellContent entered by the user
  myTable[parseInt(columnNumber, 10)].innerHTML = newCellContent;
};
