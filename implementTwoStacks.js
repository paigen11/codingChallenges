/* Implement a queue with 2 stacks. ↴ Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).

Optimize for the time cost of mm calls on your queue. These can be any mix of enqueue and dequeue calls.

Assume you already have a stack implementation and it gives O(1)O(1) time push and pop. */

// create a function that has two arrays in it
QueueTwoStacks = () => {
    this.inStack = [];
    this.outOfStack = [];
};

// create functions for enqueue and dequeue using those arrays
QueueTwoStacks.prototype.enqueue = (item) => {
    // if enqueue is called, the item is pushed to the inStack array
    this.inStack.push(item);
};

QueueTwoStacks.prototype.dequeue = () => {
    // first check that the outOfStack array isn't empty, if it is throw an error
    if(this.outOfStack.length === 0){
        throw 'The out stack is empty, nothing to remove';
    }

    // if the outOfStack array isn't empty, create a loop that while the inStack length isn't 0, pop the newest item off the stock and add it to the outOfStack array
    if(this.outOfStack.length !== 0){

        while(this.inStack.length > 0){
            var newestInStackItem = this.inStack.pop();
            this.outOfStack.push(newestInStackItem);
        }
    }
    return this.outOfStack.pop();
};

// Each enqueue is clearly O(1)O(1) time, and so is each dequeue when outStack has items.

/*  Notice that the more expensive a dequeue on an empty outStack is (that is,
the more items we have to move from inStack to outStack),
the more O(1)O(1)-time dequeues off of a non-empty outStack it wins us in the future.
 */