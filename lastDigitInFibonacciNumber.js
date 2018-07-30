/* Compute the Last Digit of a Large Fibonacci Number */
function fibLastDigit (n){
    if(n < 2){
        return n;
    }
    else {
        var a = 0;
        var b = 1;
        var c = 0;
        for(let i = 1; i < n; i++){
            c = a + b;
            a = b;
            b = c % 10
        }
        return b
    }
}

const result= fibLastDigit(10);
console.log(result);

//output 5

/* there's also another way to do it because
the series of final digits is just 60 numbers
long and then it repeats the same sequence again
and again all the way through the Fibonacci series – for ever.

So you could make an array of the first 60 digits then use that array to figure
out the number based on the index of the number out of 60
 */

function arrayOfFibs(){
    fibDigits = [];

    // add 0 and 1 to fibdigits because they're always the same
    fibDigits.push(0);
    fibDigits.push(1);

    // loop through up to 60 digits and add just the final digit of the integer to the array as well
    for(var i = 2; i <= 59; i++){
        fibDigits.push((fibDigits[i - 1] + fibDigits[i - 2]) % 10)
    }

    return fibDigits;
}

function findLastDigit(fibNum){
    const fibDigits = arrayOfFibs();

    const fibIndex = fibNum % 60;

    return fibDigits[fibIndex];
}

const result2 = findLastDigit(67);
console.log(result2);
//output 3
