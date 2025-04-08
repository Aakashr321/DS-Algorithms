/* Reverse pseudocode:Reversing the Linked list in place.
=> Swap the head and tail
=> Create a variable called next
=> Create a variable called prev
=> Create a variable called node and initialize it to the head property
=> Loop through the list
=> Set the next to be the next property on whatever node is
=> Set the next property on the node to be whatever prev is
=> Set the prev to be the value of the node variable
=> Set the node variable to be the value of the next variable
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
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(val);

    if (index === 0) {
      return !!this.unShift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    let previousNode = this.get(index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === this.length - 1) return this.pop();

    if (index === 0) return this.shift();
    let prevNode = this.get(index - 1);
    let currentNode = prevNode.next;
    prevNode.next = currentNode.next;
    this.length--;
    return currentNode.value;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
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
console.log("insert", newList.insert(2, "Newly Added"));
