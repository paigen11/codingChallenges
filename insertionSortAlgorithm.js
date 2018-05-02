/* insertion sort algorithm. divide array into two subsets, unsorted and sorted subsets, put the first element into the sorted subset and then iterate and move each new element where it needs to be in the new sorted subset

Input: [3,8,5,4,1,9,-2]
Output: [-2,1,3,4,5,8,9]

*/

const arrayToSort = [3,8,5,4,1,9,-2];

insertionSort = (arr) => {

    // start from the second element in the unsorted array as the first is used to compare to the rest
    for(var i = 1; i < arr.length; i++){

        // set a temp value equal to the value of the item in the array you're accessing
        var value = arr[i];

        /* create a second for loop, and set j equal to the previous value in the array,
          and if the previous value in the array is greater than the current value, set the current value equal to the previous value  */
        for(var j = i - 1; j > -1 && arr[j] > value; j--){

            /* replace the current indexed value with the previous value (because it's greater than the previous value) */
            arr[j + 1] = arr[j];
        }

        // otherwise, keep the current index at its current value, it's in order
        arr[j + 1] = value;

    }

    return arr;
};

insertionSort(arrayToSort);