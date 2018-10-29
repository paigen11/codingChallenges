// given an array of positive and negative numbers, find the 3 number combos in the array that equal 0

const arrayOfNums = [ -4, 11, 3, 7, -5, 6, 22, -21, -1, -3, -8, -7, -6];

const arrayOfNums2 = [2 , 4, -6]

findTriples = (arr) => {

  /* split array into two - one positive and one negative and sort
  nums into the two new arrays */
  let posArr = [];
  let negArr = [];
  let arrsEqualingZero = [];

  for(let i = 0; i <= arr.length - 1; i++){
    if(arr[i] <= 0){
      negArr.push(arr[i]);
    } else {
      posArr.push(arr[i]);
    }
  }

  negArr.sort((a, b) => {return a - b});
  posArr.sort((a, b) => {return a - b});
  // loop through one inside the other and find the difference between the positive and negative numbers to find what the third num should be
  console.log(posArr);
  console.log(negArr);

  for(var i=0; i < posArr.length; i++){
    for(var j=0; j < negArr.length; j++ ){
      let remainder = posArr[i] + negArr[j];

// if the third num is negative, check if positive array .includes the Math.abs() of it, if negative check if positive array .includes the -Math.abs() of it
      if(remainder > 0){
        if(negArr.includes(-Math.abs(remainder)) && (negArr.indexOf(-Math.abs(remainder)) != negArr.indexOf(negArr[j]))){
          arrsEqualingZero.push([posArr[i], negArr[j], -Math.abs(remainder)]);
        }
      } else if (remainder < 0){
        if(posArr.includes(Math.abs(remainder)) && (posArr.indexOf(Math.abs(remainder)) != posArr.indexOf(posArr[i]))){
          arrsEqualingZero.push([posArr[i], negArr[j], Math.abs(remainder)]);
        }
      }
    }
  }

// if true, return the three nums that make up that combo and continue
return arrsEqualingZero;
}

findTriples(arrayOfNums);
findTriples(arrayOfNums2);