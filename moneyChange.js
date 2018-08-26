/* What is the minimum number of coins with denominations 1, 5, and 10 needed to change 997? */
/* example of greedy algorithm safe choice */

function moneyChange(num) {
  var tenCoins = 0;
  var fiveCoins = 0;
  var oneCoins = 0;
  var totalCoins = 0;

  // null / positive number check
  if (num === null || num <= 0) {
    return 'number must be positive to change to money';
  }

  // calculate the number of 10 coins needed and what's leftover
  if (num >= 10) {
    tenCoins = Math.floor(num / 10);
    num = num % 10;
  }

  // calculate the number of 5 coins needed and what's leftover
  if (num >= 5) {
    fiveCoins = Math.floor(num / 5);
    num = num % 5;
  }

  // calculate teh numer of 1 coins needed
  if (num >= 1) {
    oneCoins = Math.floor(num / 1);
  }

  // add all the coins together
  return (totalCoins = tenCoins + fiveCoins + oneCoins);
}

moneyChange(997);
