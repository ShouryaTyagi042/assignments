/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  var punctuation = /[\.,?!]/g;
  var newText = str.replace(punctuation, "").replaceAll(" ", "").toLowerCase();
  console.log(newText);
  return newText == newText.split("").reverse().join("");
}
isPalindrome("Eva, can I see bees in a cave?");
module.exports = isPalindrome;
