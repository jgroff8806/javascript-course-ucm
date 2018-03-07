var removecolor = function() {
  // Grabs the colorSelect <select> element and stores it in colorList
  var colorList = document.getElementById("colorSelect");
  // Takes the colorList element and removes an index depending on which is selected by the user
  colorList.remove(colorList.selectedIndex);
};
