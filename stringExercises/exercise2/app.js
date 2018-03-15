/*
  Given 2 strings, return their concatenation, except omit the first char of each.
  The strings will be at least length 1.
  nonStart("Hello", "There") → "ellohere"
  nonStart("java", "code") → "avaode"
  nonStart("shotl", "java") → "hotlava
*/

function nonStart(str1, str2) {
  return str1.substring(1) + str2.substring(1);
}

console.log(nonStart("Hello", "There"));
console.log(nonStart("java", "code"));
console.log(nonStart("shotl", "java"));
