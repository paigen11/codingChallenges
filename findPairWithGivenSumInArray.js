/* find pair with given sum in the Array

 input: array = [8,7,2,5,3,1]
 sum = 10

 output: pair found at index 0 and 2 (8 + 2)
 or
 pair found at index 1 and 4 (7 + 3)
*/

/* assumptions: the sum is a positive number */
/* assumptions: the pair does NOT have to be two concurrent integers */
/* assumptions: the checking of the array will stop as soon as the first pair is found */

/* take the sum and subtract from the first input in the array, then search the rest of the array for the remainder, repeat until a pair is found or the whole array has been searched */

var sum = 10;
var arrayToSearch = [8,7,2,5,3,1];

hasPair = (sum, arrayToSearch) => {
    arrayToSearch.forEach(item => {
        let diff = sum - item;
    let indexOfItem = (arrayToSearch.indexOf(item));
    if(arrayToSearch.includes(diff) && arrayToSearch.indexOf(diff) !== arrayToSearch.indexOf(item)){
        let indexOfDiff = (arrayToSearch.indexOf(diff));
        console.log(`pair found at index ${indexOfItem} and ${indexOfDiff}  (${item} + ${diff})`);
        return;
    }
  })
};

hasPair(sum, arrayToSearch);