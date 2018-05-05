/* bubble sort algorithm. in-place, sorting algorithm that steps through the list to be sorted, and checks if adjacent items are in the wrong order, and if they are, swaps them

Input: [3,8,5,4,1,9,-2]
Output: [-2,1,3,4,5,8,9]

*/

const arrayToBubbleSort = [3,8,5,4,1,9,-2];

// create a swap Function
swap = (arr, i , j) => {
    // create a temp variable and set the value of arr at index i equal to the temp var
    var temp = arr[i];
    // take the value of the array at index j and set that as the value of the array at index i
    arr[i] = arr[j];
    // set the value of the array at index j equal to the value in the temp variable
    arr[j] = temp;
}

bubbleSort = (arr) => {
    // loop through the array
    for(var i = 0; i < arr.length - 1; i++){
        // create a second inner loop, that takes the entire length of the array minus the already sorted part, which is what i will represent
        for(var k = 0; k < arr.length - 1 - i; k++){
            // if the value in arr k is greater than the value to its right, swap the values
            if(arr[k] > arr[k + 1]){
                swap(arr, k, k + 1);
            }
        }
        // that's it - the array loops can't be stopped, but if the values are already in order at least the swap function won't need to be run
    }
};

bubbleSort(arrayToBubbleSort);

console.log(arrayToBubbleSort);

// recursive version to bubble sort on the array and array length

const secondArrayToBubbleSort = [3,8,5,4,1,9,-2];

// swap function stays the same

// instead of just passing an array, pass the length of the array as well as an argument
recursiveBubbleSort = (arr, arrLength) => {
    // loop through the array, the same as above
    for(var i = 0; i < arrLength - 1; i++){
        // if the first value is greater than the value to its right, swap them
        if(arr[i] > arr[i + 1]){
            swap(arr, i, i + 1 );
        }
    }

    // here's the recursion, if the lenth of the array is still greater than 1, which it always will be until the last two indexes, call the function again and subtract one from the array
    if(arrLength - 1 > 1){
        recursiveBubbleSort(arr, arrLength - 1);
    }
}

recursiveBubbleSort(secondArrayToBubbleSort, secondArrayToBubbleSort.length);

console.log(secondArrayToBubbleSort);