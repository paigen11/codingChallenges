/* You're working with an intern that keeps coming to you with JavaScript code that won't run
 because the braces, brackets, and parentheses are off. To save you both some time, you decide
 to write a braces/brackets/parentheses validator.

Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."

Write an efficient function that tells us whether or not an input string's openers and
closers are properly nested.

Examples:

"{ [ ] ( ) }" should return True
"{ [ ( ] ) }" should return False
"{ [ }" should return False */

function validateOpenersAndClosers(string){
    //define openers and closers that go together as key value pairs
    const openersToClosers = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    //create a set of unique openers
    const openers = new Set(['(', '[', '{']);
    //create a set of unique closers
    const closers = new Set ([')', ']', '}']);

    //create an empty array
    var openersStack = [];

    //create a for loop to walk through each character in a string of code
    for(var i = 0; i < string.length; i++){
        var char = string.charAt(i);

        //if the character being looped over is contained in the array of openers, add it to the list
        if(openers.has(char)){
            openersStack.push(char);
        } else if(closers.has(char)){

            //if you encounter a closing character but there's no characters in the openersStack, return false immediately
            if(!openersStack.length){
                return false;
            } else {
                //if there are characters in the openersStack, pop off the last character on the openersStack
                var lastUnclosedOpener = openersStack.pop();

                // if this closer doesn't correspond to the most recently seen unclosed opener, short-circuit, returning false
                if(openersToClosers[lastUnclosedOpener] !== char){
                    return false;
                }
            }
        }
    }
    return openersStack.length === 0;
}

const string1 = "{ [ ] ( ) }";
const string2 = "{ [ ( ] ) }";
const string3 = "{ [ }";
const string4 = ") }";

console.log(validateOpenersAndClosers(string1));
console.log(validateOpenersAndClosers(string2));
console.log(validateOpenersAndClosers(string3));
console.log(validateOpenersAndClosers(string4));