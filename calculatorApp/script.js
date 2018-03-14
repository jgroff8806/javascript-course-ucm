// get two inputs by id
// get operator id, inputOp
// operand vars (2 of them)
var textInput1 = document.getElementById("txtInput1");
var textInput2 = document.getElementById("txtInput2");
var inputOperator = document.getElementById("txtOperator");
var operand1;
var operand2;

/* 
Functions to create:
  del()
  reset()
  onClick(event)
  isOperator()
  onDecimal()
  calculate()
*/

// Function to give input
// @param evt: Will have event information
// This will help us find out which button is clicked
// onclick function(event)

function onClick(evt) {
  var char = event.target.innerText;
  if (isOperator(char)) {
    if (input1.value) {
      operand1 = input1.value;
      inputOperator.value = char;
    }
  } else {
    if (operand1) {
      input2.value = input2.value + char;
    } else {
      input1.value = input1.value + char;
    }
  }
}

// isoperator function, to know whether user has click on operator buttons (+ - * / =)
function isOperator() {
  // list each operator "+, -, *, /, =, del, res"
}

// reset function to empty or reset the calculator
function reset() {
  // this function reset
}

// delete function, works like backspace
function del() {
  //
}

// function to remove character (for delete function)

// function for calculate() to calculate input numbers and operators
function calculate() {
  //add
  //subtract
  //multiply
  //divide
}

// error handling for character
try {
} catch {
} finally {
}
