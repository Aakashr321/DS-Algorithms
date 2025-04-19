/* GET: Accessing a node in a Doubly Linked List by it's position.
Get pseudocode: 
=> If the index is less than 0 or greater or equal to the length, return null.
=> If the index is less than or equal to half the length of the list.
  > Loop through the list starting from the head and loop towards the middle.
  > Return the node once it's found.
=> If the index is greater than half of the length of the list.
  > Loop through the list starting from the tail of the list towards the middle.
  >Return the node once it's found.

*/

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;
    let poppedNode = this.tail;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.next = null;
      this.tail = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.length) return undefined;
    let oldHead = this.head;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let middle = Math.floor(this.length / 2);
    let current;
    if (index < middle) {
      let i = 0;
      current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current;
    } else {
      let j = this.length - 1;
      current = this.tail;
      while (j > index) {
        current = current.prev;
        j--;
      }
      return current;
    }
  }
}

const newList = new DoublyLinkedList();
newList.push(5);
newList.push(6);
newList.push(7);
newList.push(8);
newList.pop();
newList.shift();
newList.unShift(2);
console.log();
console.log(newList);
