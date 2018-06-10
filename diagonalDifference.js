/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.

Input Format

The first line contains a single integer,  denoting the number of rows and columns in the matrix .
The next  lines denote the matrix 's rows, with each line containing  space-separated integers describing the columns.

Constraints

Output Format

Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample input:
3 (total number of arrays and length of arrays)
11 2 4
4 5 6
10 8 -12

Sample output: 15
*/

function diagonalDifference(a) {
    let sum = 0;

    for(let i = 0; i < a.length; i++){
        sum = sum + a[i][i] - a[i][a.length - 1 - i];
    }
    return Math.abs(sum);
}
