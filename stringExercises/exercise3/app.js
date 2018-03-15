/* 
  Given a string, return the string made of its first two chars, so the String "Hello" yields "He" 
  If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string ""
  Note: str.length() returns the length of a string
  firstTwo("Hello") → "He"
  firstTwo("abcdefg") → "ab"
  firstTwo("ab") → "ab"
*/

function firstTwo(str) {
  if (str.length >= 3) {
    return str.substring(0, 2);
  } else {
    return str;
  }
}

console.log(firstTwo("Hello"));
console.log(firstTwo("abcdefg"));
console.log(firstTwo("ab"));
