/* Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers describing an array of numbers .

Output Format

You must print the following  lines:

A decimal representing of the fraction of positive numbers in the array compared to its size.
A decimal representing of the fraction of negative numbers in the array compared to its size.
A decimal representing of the fraction of zeros in the array compared to its size.*/
const arr = [-4, 3, -9, 0, 4, 1 ];

function plusMinus(arr) {
    var posInts = 0;
    var negInts = 0;
    var zeros = 0;

    for(let i = 0; i < arr.length; i++){
        if( arr[i] === 0 ){
            zeros += 1;
        } else if(arr[i] > 0){
            posInts += 1;
        } else {
            negInts += 1;
        }
    }

    if(posInts > 0 ){
        posInts = (posInts / arr.length).toFixed(6);
    }
    if(negInts > 0){
        negInts = (negInts / arr.length).toFixed(6);
    }
    if(zeros > 0){
        zeros = (zeros/ arr.length).toFixed(6);
    }
    console.log(posInts + '\n' + negInts + '\n' + zeros);
}

plusMinus(arr);

