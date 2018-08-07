/* asymptotic runtimes

log n < square root of n < n < n log n < n^2 < 2n

when you see these in a graph, the larger runtimes climb steeply after the start while the smaller run times stay much lower

big o notation

definition

f(n) = O(g(n)) -> (f is Big O of g)
if there exist constants N and c so that for all n >= N, f(n) <= c * g(n)

f is bounded above by some constant multiple of g

example
3n^2 + 5n + 2 = O(n^2) since if n >= 1,
    3n^2 + 5n + 2 <= 3n^2 + 5n^2 + 2n^2 = 10n^2

    3n^2 + 5n + 2 has a growth rate similar to n^2 (just multiplied by a factor 3)

we'll use big o notation to define our algorithm growth rate

cleans up notations
- O(n^2) vs. 3n^2 + 5n + 2
- O(n) vs. n + log2(n) + sin(n)
- O(n log(n)) vs. 4n log2(n) + 7
note: log2(n), log3(n), logx(n) differ by constant multiples so we don't need to specify which

be aware: big o loses important information about constant multiples (1 versus 1000 will still make a difference in runtime in real life), and it is only asymptotic (only tells what happens when you put really, really, really big inputs into the algorithm)

big o rules:
    - multiplicative constants can be omitted
- the n with the larger exponent grows faster
- the exponential will always grow faster than a polynomial
- any power of log n grows slower
- smaller n terms can be omitted - the biggest value of n will be the determining factor of runtime

other notations:
    - to talk about f is bounded below by something, it'd be
- f(n) = omega(g(n)) or f >= g if for some c,
f(n) >= c * g(n) (f grows no slower than g)
- if f grows at the same as g:
- f(n) = omega(g(n)) or f == g if f = O(g) and
f = omega(g) (f grows at the same rate as g)
- if f grows strictly lower than g
- f(n) = o(g(n)) or f < g if
    f(n) / g(n) => O as n => infinity (f grows slower than g)
*/