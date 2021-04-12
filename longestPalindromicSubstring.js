/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  // if str is length of 0 return empty string, if s is length of 1, return s
  if(s.length < 1){
      return "";
  }
  if(s.length === 1){
      return s;
  }
  
  //otherwise, create a var to hold start of substr and max length of substr
  let startOfSubstr = 0;
  let maxLengthOfSubstr = 0;
  
  //loop through string
  for(let i = 0; i < s.length; i++){
    // find max length of string when starting from center of character (for odd palindromes like "aba")
      const lengthCenteredAtChar = expandFromMiddle(s, i, i);
      // find max length of string when starting from center of space between characters (for even palindromes like "atta")
      const lengthCenteredAtSpace = expandFromMiddle(s, i, i + 1);
      // find max substr between the two options
      const longestSubStr = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace);
      // if temp longest var is greater than current longest
      if(longestSubStr > maxLengthOfSubstr){
        // replace
          maxLengthOfSubstr = longestSubStr;
          // calc new start of substr
          startOfSubstr = i - Math.floor((maxLengthOfSubstr - 1) / 2);
      }
  }
  return s.substr(startOfSubstr, maxLengthOfSubstr)
 
};

// helper function to work from char / space in string outwards
function expandFromMiddle(str, leftIndex, rightIndex) {
  // while leftInd is 0 or greater, right index is string length or less and char at each index is equal, keep moving out
  while(leftIndex >= 0 && rightIndex < str.length && str[leftIndex] === str[rightIndex]){
      leftIndex--;
      rightIndex++
  }
  // if while loop breaks, subtract current rightInd from current leftInd minus 1
  return rightIndex - leftIndex - 1;
}