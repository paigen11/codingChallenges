/* given two arrays, find and return a new array of just the duplicates */

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5];

const findDuplicates = (arr1, arr2) => {
  const dupes = [];

  arr1.filter((val) => {
    const temp = arr2.indexOf(val) != -1;
    if(temp === true){
      dupes.push(val);
    }
  });
  return dupes;
}; 