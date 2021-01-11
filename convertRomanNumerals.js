// Problem: Convert Roman Numerals to Decimals

// create a function with a for-loop to iterate through the specified roman numeral value
const convertRomans = (romanNum) => {
  // check if romanNum exists or is an empty string
  if(romanNum === undefined || romanNum.length === 0){
    return 0;
  }

  // if it exists, declare all the roman numerals and their equivalent decimal value
  const tallies = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  };

  // convert string to array and iterate over
  const romanArr = [...romanNum];
  let sum = 0;
  for(let i = 0; i < romanArr.length - 1; i++){
    let left = romanArr[i];
    let right = romanArr[i + 1];
    // check if first value is less than second value, if it is, subtract if from the total sum
    if(tallies[left] < tallies[right]){
      sum -= tallies[left];
    } else {
      // if it greater or equal, add to total sum
      sum += tallies[left];
    }
  }
    // add the last value at the end of the arr b/c it wasn't iterated over
  sum += tallies[romanArr[romanArr.length - 1]];
  return sum;
}

const testRomanNum = 'CMXCVIII';

const convertedResult = convertRomans(testRomanNum);
console.log(convertedResult); // 998