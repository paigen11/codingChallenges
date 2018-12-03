// create a stack in JS (last in first out principal)

// factory function to create stack
function createStack() {
  // array held in closure to store items
  const array = [];

  return {
    // push items onto end of array
    push(item) {
      array.push(item);
    },

    // pop items off end of array first
    pop() {
      return array.pop();
    },

    // peek
    peek() {
      return array[array.length - 1];
    },

    // length of array (getter function again)
    get length() {
      return array.length;
    },

    // check if array isEmpty
    isEmpty() {
      return array.length === 0;
    },
  };
}

const lowerBodyStack = createStack();

lowerBodyStack.push('underpants');
lowerBodyStack.push('socks');
lowerBodyStack.push('pants');
lowerBodyStack.push('shoes');

console.log(lowerBodyStack.peek());
console.log(lowerBodyStack.length);
console.log(lowerBodyStack.isEmpty());

lowerBodyStack.pop('shoes');
lowerBodyStack.pop('pants');

console.log(lowerBodyStack.peek());
console.log(lowerBodyStack.length);

lowerBodyStack.pop('socks');
lowerBodyStack.pop('underpants');

console.log(lowerBodyStack.isEmpty());
