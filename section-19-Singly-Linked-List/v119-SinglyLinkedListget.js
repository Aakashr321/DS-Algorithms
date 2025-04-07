/* Get pseudocode: Retrieving a node by it's position in the linked list.
=> This function should accept an index.
=> If the index is less than zero or greater than or equal
to the length of the list, return null
=> Loop through the list until you reach the index and 
return the node at that specific index
*/

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.value;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead.value;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let i = 0;
    let current = this.head;

    while (i <= index) {
      current = current.next;
      i++;
    }
    return current.value;
  }
}

const newList = new SinglyLinkedList();

newList.push("Hello1");
newList.push("Hello2");
newList.push("Hello3");
newList.push("Hello4");
newList.push("Hello5");
console.log("pop", newList.pop());
console.log("shift", newList.shift());
console.log("unshift", newList.unShift("Another"));

console.log(newList);
console.log(newList.get(3));
