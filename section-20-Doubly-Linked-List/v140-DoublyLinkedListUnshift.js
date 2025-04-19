/* Unshift : Adding a new Node to be the beginning of the Doubly linked list.
Unshift pseudocode: 
=> Create a new node with the value passed to the function
=> If the length is 0
    >Set the head to be the new node
    >Set the tail to be the new node
=> Otherwise
    >Set the prev property on the head of the list to be the 
    new node
    >Set the next property on the new node to be the head property
    > Update the head to be the new node.
=> Increment the length 
=> Return the list
*/

class Node {
  constructor(val) {
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
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
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
}

const newList = new DoublyLinkedList();
newList.push(5);
newList.push(6);
newList.push(7);
newList.push(8);
newList.pop();
newList.shift();
newList.unShift(2);
console.log(newList);
