/* For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. */

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
   // string to return roman numerals in
  let romanNumStr = '';

   // create an object of roman nums and the ints they represent
   const romanNumsToInts = {
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1
   }

   // make an array of these keys and loop through the keys 
   for(let i of Object.keys(romanNumsToInts)){
     // find the romanNumToInt that's equal to or just less than the current num value
     const closestRomanNumLessOrEqualToNum = Math.floor(num / romanNumsToInts[i]);
     // if the var above is 1 or more, determine it's int value and subtract that from the current num
     if(closestRomanNumLessOrEqualToNum > 0){
      num -= closestRomanNumLessOrEqualToNum * romanNumsToInts[i];
      // add whatever was just subtracted from num to string hold roman numeral equivalent
      romanNumStr += i.repeat(closestRomanNumLessOrEqualToNum);
     }
   }
  return romanNumStr;
 }

 console.log(intToRoman(2)) // II
 console.log(intToRoman(76)) // LXXVI
 console.log(intToRoman(4)) // IV
 console.log(intToRoman(9)) // IX
 console.log(intToRoman(40)) // XL
 console.log(intToRoman(58)) // LVIII
 console.log(intToRoman(1994)) // MCMXCIV