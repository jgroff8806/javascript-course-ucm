var insert_Row = function() {
  // Selects the <table> element with id "sampleTable"
  var table = document.getElementById("sampleTable");
  // Create new empty <tr> elements
  // and adds them to the 3rd and 4th position of the table
  // (2), (3) = index values of the table
  var row3 = table.insertRow(2);
  var row4 = table.insertRow(3);
  // Inserts new cells at the 1st and 2nd position, (0) and (1),
  // of the new row3 element
  var row3cell1 = row3.insertCell(0);
  var row3cell2 = row3.insertCell(1);
  // Inserts new cells at the 1st and 2nd position, (0) and (1),
  // of the new row4 element
  var row4cell1 = row4.insertCell(0);
  var row4cell2 = row4.insertCell(1);
  // Creates new text nodes for the new cells of row3 and row4
  // and inserts their text values
  var row3Cell1Text = document.createTextNode("Row3 cell1");
  var row3Cell2Text = document.createTextNode("Row3 cell2");
  var row4Cell1Text = document.createTextNode("Row4 cell1");
  var row4Cell2Text = document.createTextNode("Row4 cell2");
  // Appends the new text nodes to their respective cells
  row3cell1.appendChild(row3Cell1Text);
  row3cell2.appendChild(row3Cell2Text);
  row4cell1.appendChild(row4Cell1Text);
  row4cell2.appendChild(row4Cell2Text);
};
