/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go 
outside the signed 32-bit integer range [-231, 231 - 1], then return 0. */

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  // if x is a single digit, just return x
    if(x > -10 && x < 10){
      return x;
    }
    
    // convert num to positive integer, then stringify, split, reverse, rejoin
    const revNum = Math.abs(x).toString().split('').reverse().join('');
    
    // if x reversed is outside of the constraints, return 0;
    if(revNum >Math.pow(2,31) || revNum < Math.pow(-2,31)) {
        return 0;
      }    

    // if x is less than 0, make new val back to neg num
    if(x < 0) {
        return -Math.abs(revNum);
      } else {
        return revNum;
      }
};

console.log(reverse(0))
console.log(reverse(123))
console.log(reverse(-120))
console.log(reverse(-8))
console.log(reverse(7))
console.log(reverse(1534236469))