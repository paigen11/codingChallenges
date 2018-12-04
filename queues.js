// create a queue in JS (first in first out principal)

function createQueue() {
  const queue = [];

  return {
    // add new element to front of array
    enqueue(item) {
      queue.unshift(item);
    },

    // remove final item from array
    dequeue() {
      return queue.pop();
    },

    // peek at next item to be removed
    peek() {
      return queue[queue.length - 1];
    },

    // creat getter method to get current length of queue
    get length() {
      return queue.length;
    },

    // check if queue is empty
    isEmpty() {
      return queue.length === 0;
    },
  };
}

export default createQueue;

const q = createQueue();
console.log(q.isEmpty());

q.enqueue('I am a first item');
q.enqueue('I am a second item');
q.enqueue('I am a third item');

console.log(q.length);
console.log(q.peek());

q.dequeue();
console.log(q.length);
console.log(q.peek());

q.dequeue();
console.log(q.length);
console.log(q.peek());

q.dequeue();
console.log(q.length);
console.log(q.isEmpty());
