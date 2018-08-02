/* find the maximum product of two elements in an array of numbers */

const array1 = [7,3,11,1,9,4,6,9];
const array2 = [8];
const array3 = [2,4];
const array4 = [6, 9, 5, 10, 12, 7, 4, 1];

function maxPair(arr){
    let max = 0;
    let secondMax = 0;
    let product = 0;

// null check
    if(arr === null){
        throw new Error('array cannot be null');
    }

// check if length of array is less than 2
    if(arr.length > 0 && arr.length < 2){
        throw new Error('array must have at least 2 elements');
    }

// check the length of the array is 2
    if(arr.length === 2){
        product = arr[0] * arr[1];
    }

    // if array has more than 2 elements, order the first two elements then iterate through the remaining items to get the two largest
    if(arr.length >= 3){
        if(arr[0] > arr[1]){
            max = arr[0];
            secondMax = arr[1];
        } else {
            max = arr[1];
            secondMax = arr[0];
        }

        for(var i = 2; i < arr.length; i++){
            if(arr[i] >= max){
                secondMax = max
                max = arr[i];
            } else if(arr[i] < max){
                if(arr[i] >= secondMax){
                    secondMax = arr[i]
                }
            }
        }
        product = max * secondMax;
    }
    console.log(product);
    return product;
}

maxPair(array1); // 99
maxPair(array2); // throws error
maxPair(array3); // 8
maxPair(array4); // 120