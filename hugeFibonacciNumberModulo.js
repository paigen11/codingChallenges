/* Compute a Huge Fibonacci Number Modulo m */

// figure out the period number based on modulo
function getPisanoPeriod(modulo){
    // always fib 1
    var a = 0;
    // always fib 2
    var b = 1;
    // temp placeholder
    var c = 0;
    var period = 0;
    // for loop to find the period integer
    for(let i = 0; i < modulo * modulo; i++){
        // swapping values as loop happens and finding remainder of each fib num
        c = (a + b) % modulo;
        a = b;
        b = c;
        // break out of the for loop when this condition is met by i in the for loop
        if(a === 0 && b === 1){
            period = i + 1;
            return period;
        }
    }
}

// incorporate pisano function into solving huge fib
function computeHugeFib(fibNum, modulo){

    // find the remainder of the fibNum when divided by the pisano period number
    var remainder = fibNum % getPisanoPeriod(modulo);

    var firstFib = 0;
    var secondFib = 1;

    // set the remainder equal to a result variable
    var result = remainder;

    // loop through up to the remainder's value and update the result as it goes
    for(let i = 1; i < remainder; i++){
        // once again, find the remainder of each fibNum and swap them
        result = (firstFib + secondFib) % modulo;
        firstFib = secondFib;
        secondFib = result;
    }
    // finally, after the loop, take the last result, and divide it by the original modulo
    return result % modulo;

}

computeHugeFib(281621358815590, 30524); // output 11963