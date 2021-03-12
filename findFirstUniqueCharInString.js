
// Prompt: Given a string, write a function that returns the first unique character in a string.

// example inputs "abcde" => a
// example "12345" => 1
// example input "aabcde" => b

const uniqueChar = (string) => {
  // loop through the string (don't bother turning into an array first)
  for (let i = 0; i < string.length; i++) {
    // define a local variable to keep track of current value in string using charAt() string method
    const currentChar = string.charAt(i);
    // first, check if the local variable's index valule is equal to the value of i or not - if not, it means a previous character in the string is a duplicate of the current character being checked

    // second, check if the value in the string is present anywhere further down the string or not
    if (string.indexOf(currentChar) == i && string.indexOf(currentChar, i + 1) == -1) {
      // if both checks evaluate this is a unique character
      return currentChar;
    }
  }
  // if loop exits it means all values were duplicates and no unique values existed
  return 'No unique characters in the string';
}

const string1 = "abcde fghi abcd"
const string2 = "12345"
const string3 = "aabcd"
const string4 = "bacadb"
const string5 = '123123'

console.log(uniqueChar(string1)) // e
console.log(uniqueChar(string2)) // 1
console.log(uniqueChar(string3)) // b
console.log(uniqueChar(string4)) // c
console.log(uniqueChar(string5)) // no unique chars