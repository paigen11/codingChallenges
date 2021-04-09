/* Given a string s, find the length of the longest substring without repeating characters. */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  // check if string is empty or length of 1 and return appropriate number
  if(s === ""){
    return 0;
  }
  if(s.length === 1){
    return 1;
  }

  // create some pointers to slide down the length of the string (sliding window solution)
  let pointerA = 0;
  let pointerB = 0;
  
  // create a var to hold max length
  let maxLength = 0;
  // create an array to hold the uniq substr
  let subStrArr = [];

  // while second pointer hasn't reached the end of the string
  while(pointerB < s.length){
    // check if the subStrArr alredy includes the char at whatever index in string s[pointerB] is
    if(!subStrArr.includes(s[pointerB])){
      // if char's not present, add it to sub str arr, increment pointer to next pos in s, and choose the max length from the new sub str arr length vs prev max length num
      subStrArr.push(s[pointerB]);
      pointerB++;
      maxLength = Math.max(subStrArr.length, maxLength);
    } else {
      // if char's already in sub str arr, remove it from sub str arr
      // splice syntax (index to remove element from, num of elements to remove)
      subStrArr.splice(s[pointerA],1);
      // and advance pointerA along string's length for any future events of duplicate chars
      pointerA++;
    }
  }
  return maxLength;
 }

 console.log(lengthOfLongestSubstring("bacabcbb")) // 3
 console.log(lengthOfLongestSubstring("bbbb")) // 1
 console.log(lengthOfLongestSubstring("pwwkew")) // 3
 console.log(lengthOfLongestSubstring("")) // 0