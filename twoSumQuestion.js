/* You are asked to create a function that takes two parameters. 
The first parameter,  nums, is an array of numbers. 
The second parameter, total is a single number. 
The output of the function should be a two-element array that 
represents a pair of numbers in nums that add up to total.  */

// input: nums = [1, 2, 3], total = 4
// output: [1, 3]

// input: nums = [3, 9, 12, 20], total = 21
// output: [9, 12]

const arr1 = [1, 2, 3];
const arr2 = [3, 9, 12, 20];
const arr3 = [1, 5, 6, 7, 9, 10, 17, 36, 42, 67];
const arr4 = [2, 3, 6, 8, 9, 11, 17, 23, 26, 38, 49, 51, 57, 64, 69, 71, 78];

// brute force solution, time complexity o(n)^2 for double for loop
const slowerTwoSum = (arr, total) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log(slowerTwoSum(arr1, 4));
console.log(slowerTwoSum(arr2, 21));
console.log(slowerTwoSum(arr3, 68));
console.log(slowerTwoSum(arr4, 53));

// more elegant solution,
// time complexity o(1) because object lookup by key
// can be faster than array looping lookup o(n) - esp for arrays of numbers to compare
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

console.log(twoSum(arr1, 4));
console.log(twoSum(arr2, 21));
console.log(twoSum(arr3, 68));
console.log(twoSum(arr4, 53));
