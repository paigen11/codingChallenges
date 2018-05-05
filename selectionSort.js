/* selection sort algorithm. divide array into two subsets, unsorted and sorted subsets, the algorithm looks for the smallest element in the unsorted subset and puts it into the sorted subset and so on down the line

Input: [3,8,5,4,1,9,-2]
Output: [-2,1,3,4,5,8,9]

*/

const arrayToSort = [3,8,5,4,1,9,-2];

swap = (arr, i, j) => {
    //set the value in the array equal to a temp variable
    var temp = arr[i];
    // set the array i val equal to the array j val
    arr[i] = arr[j];
    // set the array j val equal to the temp val
    arr[j] = temp;
};

selectionSort = (arr) => {
    // loop through the array
    for(var i = 0; i < arr.length; i++){
        // set the temp variable min equal to i for each loop
        var min = i;

        // create a second inner loop to compare the first value in the array to the value next to it
        for(var j = i + 1; j < arr.length; j++){

            // if the value at index j is less than the value set as min, set min equal to j
            if(arr[j] < arr[min]){
                min = j;
            }

            // run the swap function, regardless of if the value is actually already in order, it will still be swapped with itself
            swap(arr, i, min);
        }

    }
};

selectionSort(arrayToSort);

console.log(arrayToSort);