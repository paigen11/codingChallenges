/* euclidean algorithm for greatest common divisor

function euclidGCD(a, b){
	if b == 0
		return a;
	else
		a^1 = a % b (remainder of a divided by b)
	return euclidGCD(b, a^1)
} */

function euclideanGCD(num1, num2){

    var remainder = 0;
    var gcd = 0;

    if(num1 === null || num2 === null){
        throw new Error('variables cannot be null');
    }

    if(num2 == 0){
        console.log(num1);
        gcd = num1;
        return gcd;
    } else {
        remainder = num1 % num2;
        euclideanGCD(num2, remainder);
    }
    return gcd;
}

euclideanGCD(3918848, 1653264); //61232