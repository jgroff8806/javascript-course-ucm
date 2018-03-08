function getOptions() {
  var selection = document.getElementById("mySelect");
  var selectLen = selection.getElementsByTagName("option");

  var opt = "";
  for (i = 0; i < selectLen.length; i++) {
    opt += "\n" + selectLen[i].value;
  }
  alert(
    "Amount of colors: " +
      "\n" +
      selectLen.length +
      "\n" +
      "\n" +
      "Color options:" +
      opt
  );
}
