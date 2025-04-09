/* Remove pseudocode:Removing a Node to linked list at a specific position.
=> If the index is less than zero or greater than the length, return undefined.
=> If the index is the same as the length - 1, pop.
=>  If the index is 0 , shift.
=> Otherwise, using the get method, access the node at the index -1.
=> Set the next property on that node to be the next of the next node.
=> Decrement the length.
=> Return the value of the node removed.
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
    return currentNode;
  }
  rotate(k) {
    if (!this.head || this.length <= 1 || k === 0) return;

    // Normalize k to avoid unnecessary rotations
    k = k % this.length;
    if (k === 0) return;

    let current = this.head;
    let tail = null;

    // Find the tail of the list
    while (current.next) {
      current = current.next;
    }
    tail = current;

    // Connect the tail to the head to make it circular
    tail.next = this.head;

    // Find the new tail: (length - k - 1)th node
    let newTail = this.head;
    for (let i = 0; i < this.length - k - 1; i++) {
      newTail = newTail.next;
    }

    // The new head will be the next node after the new tail
    this.head = newTail.next;
    // Break the circular connection
    newTail.next = null;
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
