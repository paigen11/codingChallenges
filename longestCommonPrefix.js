/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let commonPrefix = "";

// check if strs are null or empty
if(strs === null || strs.length === 0){
 return commonPrefix;
}

// otherwise loop over each letter in first string in arr
for(let i = 0; i < strs[0].length; i++){
 let char = strs[0][i];
 // loop through every other string in arr and compare each letter at the same index
 for(let j = 1; j < strs.length; j++){
   // if even one string doesn't have the same char as the first string at that index, the longer prefix has been found
   if(strs[j][i] !== char){
     return commonPrefix;
    }
   }
   // if they all have the same char at that index, add it to the commons prefix var
   commonPrefix += char;
 }
  return commonPrefix;
};

const testString = ["flower","flow","flight"]

console.log(longestCommonPrefix(testString))