function isParrotInTrouble(isTalking, hour) {
  // If parrot not talking -> parrot not in trouble -> return false
  // else if - hour is < 7 or > 20 -> parrot is in trouble -> return true

  if (hour < 20) {
    return true;
  } else if (hour === 7 || hour === 20) {
    return false;
  }
}
