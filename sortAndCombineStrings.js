// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.
// Example:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b)
// -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a)
// -> "abcdefghijklmnopqrstuvwxyz"

const a = 'xyaabbbccccdefww';
const b = 'xxxxyyyyabklmopq';
const c = 'abcdefghijklmnopqrstuvwxyz';
const d = 11;

function longest(a, b) {
  // undefined / null check
  if (a === undefined || b === undefined || (a === null || b === null)) {
    throw new Error('You must have two string values to sort and compare');
  }

  // check both values are strings
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new Error('Both parameters must be strings');
  }

  // split strings into arrays
  const arrA = a.split('');
  const arrB = b.split('');

  // combine arrays
  const combinedArr = arrA.concat(arrB);

  // sort arrays
  const sortedArr = combinedArr.sort();

  // transform arrays into Set, which filters out duplicates automatically
  const singleSet = new Set(sortedArr);
  console.log(singleSet);

  // transform Set back to string, by spreading the Set's values and joining them back together
  const newString = [...singleSet].join('');
  return newString;
}

console.log(longest(a, b));
console.log(longest(b, b));
console.log(longest(a, a));
console.log(longest(c, c));
console.log(longest(c, d));
