/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let map = {};
  const res = str1.split("");
  res.forEach((element) => {
    element = element.toLowerCase();
    if (map[element] == null) map[element] = 1;
    else map[element] += 1;
  });
  const split2 = str2.split("");
  let flag = true;
  split2.forEach((elem) => {
    elem = elem.toLowerCase();
    if (map[elem] == null || map[elem] <= 0) {
      flag = false;
      return;
    } else map[elem] -= 1;
  });
  return flag;
}

module.exports = isAnagram;
