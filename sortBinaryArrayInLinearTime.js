/* given a binary array, sort it in linear time and constant space. Output should contain all 0s followed by all 1s

Input: [1,0,1,0,1,0,0,1] 
Output: [0,0,0,0,1,1,1,1]

*/

/* count the number of zeros, insert them into the first part of the array, fill the last part of the array with ones */

const unorderedArray = [1,0,1,0,1,0,0,1];
const orderedArray = [];

sortTheArray = (array) => {
var zeros = 0;

// count the number of zeros
for(let i = 0; i < array.length; i++){
    if(array[i] === 0){
      zeros++;
    }
  }
  
  while(zeros-- !== 0){
    orderedArray.push(0);
  }
  
  while(orderedArray.length < array.length){
    orderedArray.push(1);
  }
}


sortTheArray(unorderedArray);

console.log(orderedArray);
