// Your code here
export function isPalindrome(word) {
  let rev = word.split("").reverse().join("");
  if (rev == word) {
    return true;
  }
  return false;
}

let word1 = "mom";
let word2 = "car";

isPalindrome(word1);
isPalindrome(word2);
