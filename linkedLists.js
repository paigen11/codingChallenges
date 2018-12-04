/* create a linked list which is a collection of items
 where each item points to the next one in the list */

// create a node to go inside the list (factory function)
function createNode(value) {
  return {
    value,
    next: null,
  };
}

function createLinkedList() {
  return {
    // head
    head: null,
    // tail
    tail: null,
    // length
    length: 0,
    // push
    push(value) {
      const node = createNode(value);

      // if our list is empty, then the first node needs to be set as both head and tail
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      }

      this.tail.next = node;
      this.tail = node;
      this.length++;

      return node;
    },
    // pop
    pop() {
      // null check first
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;

      // check if head and tail are the same node (i.e. only one in list)
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }

      let current = this.head;
      let penultimate;
      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }
        current = current.next;
      }
      penultimate.next = null;
      this.tail = penultimate;
      this.length--;

      return node;
    },
    // get
    get(index) {
      // check if item is in bounds
      if (index < 0 || index > this.length) {
        return null;
      }

      if (index === 0) {
        return this.head;
      }

      let current = this.head;
      let i = 0;
      while (i < index) {
        i++;
        current = current.next;
      }
      return current;
    },
    // delete
    delete(index) {
      // index out of bounds check
      if (index < 0 || index > this.length) {
        return null;
      }

      if (index === 0) {
        const deleted = this.head.next;
        this.length--;

        return deleted;
      }

      let current = this.head;
      let previous;
      let i = 0;

      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }

      const deleted = current;
      previous.next = current.next;
      this.length--;

      return deleted;
    },
    // isEmpty
    isEmpty() {
      return this.length === 0;
    },

    print() {
      const value = [];
      let current = this.head;

      while (current) {
        values.push(current.value);
        current = current.next;
      }

      return values.join(' => ');
    },
  };
}

const list = createLinkedList();
const values = ['a', 'b', 'c', 'd', 'e'];
const nodes = values.map(val => list.push(val));

console.log(list.isEmpty());
console.log(list.pop().value);
console.log(list.get(1));
console.log(list.delete(1));
console.log(list.print());
