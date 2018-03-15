/* 
  Given a string of even length, return the first half. So the string "WooHoo" yields "Woo"
  firstHalf("WooHoo") → "Woo"
  firstHalf("HelloThere") → "Hello"
  firstHalf("abcdef") → "abc
*/

function firstHalf(str) {
  // Gets the length of the string starting at index 0 and divides that by 2 to return the first half of the string
  return str.substring(0, str.length / 2);
}

console.log(firstHalf("WooHoo"));
console.log(firstHalf("HelloThere"));
console.log(firstHalf("abcdef"));
