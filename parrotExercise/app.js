function isParrotInTrouble(isTalking, hour) {
  /* range 0 - 23
  If (parrot not talking)
    parrot not in trouble 
    return false
  else if (parrot is talking) 
    parrot is in trouble
    return true 
  */

  if (hour < 20) {
    return true;
  } else if (hour === 7 || hour === 20) {
    return false;
  }
}
