/* compute a small fibonacci number */

// Fibonacci algorithm - the more efficient way than recursion

/* create an array F[0...n]
F[0] <- 0 (if F is 0, return 0)
F[1] <- 1 (if F is 1, return 1)
for i from 2 to n:
	F[i] <- F[i - 1] + F[1 - 2]
return F[n]
*/

function calc_fib(n){
    var a = 0;
    var b = 1;
    if(n < 0){
        return 'bad input'
    } else if(n == 0){
        return a;
    } else if(n == 1){
        return b;
    } else {
        for(var i = 1; i < n; i++){
            var c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

calc_fib(10);
// output 55

// OR

function fibonacci(num){
    var a = 1, b = 0, temp;

    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return temp;
}

fibonacci(10);