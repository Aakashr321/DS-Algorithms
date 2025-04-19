/* SET: Replacing the value of a node to the new value in a Doubly Linked list.
SET Pseudocode:
=> Create a variable which is the result of the get method at the index 
    passed to the function.
    > If the get method returns a valid node, set the value of that node to be
    the value passed to the function 
    > Return true
=> Otherwise, return false
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
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
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
