/* binary search algorithm, given a sorted array of integers and a target value, find out if the target exists in the array, if target exists print its index */

/* instead of iterating over the whole array which takes 0(n) worst case, split the array into two, discard one subarray based on if the value is higher or lower than the mid value of the array and iterate or recurse through the array where the value might exist */

const sortedArray = [2,5,6,8,9,10];
const valueToFind = 8;

// create a function to breakdown the array into subarrays
binarySearch = (array, key) => {

    // set the size of the array
    let left = 0;
    let right = array.length - 1;

    // as long as the ends of the array have not met in the middle or crossed run the function
    while(left <= right){

        // find the midpoint between the two values and take the whole integer
        let mid = Math.floor((left + right) / 2);

        // if the value is equal to the middle index, return that index
        if(key === array[mid]){
            return mid;
            // if the key value is less than the value of the middle index, shorten the right side of the array by one
        } else if (key < array[mid]){
            right = mid - 1;
            // if the key value is greater than the value of the middle index, move up the left side of the array by one
        }  else {
            left = mid + 1;
        }
    }

    // if the value isn't in the array, return -1
    return -1;
};

let index = binarySearch(sortedArray, valueToFind);

if(index !== -1){
    console.log("The value exists in the array");
} else {
    console.log("The value is not present in this array");
}