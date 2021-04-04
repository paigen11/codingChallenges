/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  // neg int can't be palindrome
  if(x < 0){
      return false;
  }
  
  let factor = 1;
  
  // if x / factor is greater than 10, increase factor until it's 10 or less to grab first digit off number
  while(x / factor >= 10){
      factor *= 10;
  }
  
  while(x){
      // get first digit off of int
      let first = Math.floor(x / factor);
      
      // get last digit off int
      let last = x % 10
      
      // if they're not the same, you're done
      if(first !== last){
          return false;
      }
      
      // they're the same so get leftover after dividing num by factor to remove first digit
      // and get rid of last digit by dividing by 10 and rounding down
      x = Math.floor((x % factor) / 10);
      
      // update factor to match new x num
      factor = factor / 100;
  }
  return true;
};

console.log(isPalindrome2(10))
console.log(isPalindrome2(100001))
console.log(isPalindrome2(24322))
console.log(isPalindrome2(-11))