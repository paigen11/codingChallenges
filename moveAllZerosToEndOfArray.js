/* move all zeros present in an array to the end, the solution should maintain
the relative order of items in the array

input: [6,0,8,2,3,0,4,0,1]

output: [6,8,2,3,4,1,0,0,0]

*/

/* create two new empty arrays, one for non-zero values and one for zero values, loop through existing array and check value and assign to one array or the other, then concatenate the two together */

var inputArray = [6,0,8,2,3,0,4,0,1];
var nonZeroArr = [];
var zeroArr = [];
var newArray;

sortZeroArray = (array) => {
    array.forEach(number => {
        if(number !== 0){
            nonZeroArr.push(number);
        } else {
            zeroArr.push(number);
        }
    });
    newArray = nonZeroArr.concat(zeroArr);
    console.log(newArray);
    return newArray;
;}

sortZeroArray(inputArray);