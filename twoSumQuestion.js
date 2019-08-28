/* You are asked to create a function that takes two parameters. 
The first parameter,  nums, is an array of numbers. 
The second parameter, total is a single number. 
The output of the function should be a two-element array that 
represents a pair of numbers in nums that add up to total.  */

// input: nums = [1, 2, 3], total = 4
// output: [1, 3]

// input: nums = [3, 9, 12, 20], total = 21
// output: [9, 12]

/**
 * @param {number[]} nums
 * @param {number} total
 * @return {number[]}
 */
const twoSum = (arr, total) => {
  const prevValues = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = total - arr[i];

    if (prevValues[complement]) {
      return [complement, arr[i]];
    }

    prevValues[arr[i]] = true;
  }
};

const arr1 = [1, 2, 3];
const arr2 = [3, 9, 12, 20];

console.log(twoSum(arr1, 4));
console.log(twoSum(arr2, 21));
