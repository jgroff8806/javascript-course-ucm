var getAttributes = function() {
  // Selects the <a> element and returns the id "w3r" and stores it in link variable
  var link = document.getElementById("w3r");
  var href = link.href;
  var hreflang = link.hreflang;
  var rel = link.rel;
  var target = link.target;
  var type = link.type;

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
