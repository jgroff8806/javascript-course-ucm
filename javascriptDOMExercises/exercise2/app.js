var getFormvalue = function(e) {
  // Prevent default action of form from refreshing the page
  event.preventDefault();
  // Select and return the first element of the form that matches the selector value of 'input' and the node values of 'name'
  var firstName = document.querySelector("input[name=fname]").value;
  var lastName = document.querySelector("input[name=lname]").value;
  // Output the values of firstName / lastName
  alert(firstName + " " + lastName);

  console.log(firstName);
  console.log(lastName);
};
