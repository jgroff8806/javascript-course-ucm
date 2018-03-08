// Grabs form element radius / volume and stores them in inputRadius / inputVolume
var inputRadius = document.getElementById("radius");
var inputVolume = document.getElementById("volume");

function calcSphere(e) {
  e.preventDefault();
  // Takes the radius value input by the user and stores it in radius
  var radius = inputRadius.value;
  // Returns the absolute value of the input radius value
  radius = Math.abs(radius);
  // Calculates the volume of a sphere and stores it in volume
  volume = 4 / 3 * Math.PI * Math.pow(radius, 3);
  // Formats the volume value to two fixed-points
  volume = volume.toFixed(2);
  // Takes the formatted volume value and outputs it to the volume element
  document.getElementById("volume").value = volume;

  return false;
}
