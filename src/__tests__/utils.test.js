// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("checks if word is a palindrome", () => {
    const word = "mom";
    const palindrome = isPalindrome(word);
    expect(palindrome).toBe(true);
  });

  it("checks if word is not a palindrome", () => {
    const word = "car";
    const palindrome = isPalindrome(word);
    expect(palindrome).toBe(false);
  });
});

