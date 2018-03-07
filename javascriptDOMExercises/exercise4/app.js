var getAttributes = function() {
  // Selects the <a> element and returns the id "w3r" and stores it in link variable
  var link = document.getElementById("w3r");

  // link is then used to reference each attribute available from the <a> element "w3r"
  // and stores them in their own respective variable
  var href = link.href;
  var hreflang = link.hreflang;
  var rel = link.rel;
  var target = link.target;
  var type = link.type;

  // Console.log includes concatination and use of line breaks "\n" to seperate each attribute value
  console.log(
    "href: " +
      href +
      "\n" +
      " hreflang: " +
      hreflang +
      "\n" +
      " Rel: " +
      rel +
      "\n" +
      " Target: " +
      target +
      "\n" +
      " Type: " +
      type
  );
};
