/*
 Unshift Pseudocode: Adding a new Node to the beginning of the linked list. 
=> This function should accept a value.
=> Create a new node using the value passed to the function 
=> If there is no head property on the list, set the head and tail to be the
  newly created node.
=> Otherwise set the newly created node's next property to be the current
  head property on the list
=> Set the head property on the list to be that newly created node
=> Increment the length of the list by 1
=> Return the linked list
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
      newTail = current.next;
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
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
    if (this.length === 0) {
      this.tail = newHead;
    }
    this.length++;
    return this;
  }
}

let newList = new SinglyLinkedList();

newList.push("Hello1");
newList.push("Hello2");
newList.push("Hello3");
newList.push("Hello4");
newList.push("Hello5");
console.log("pop", newList.pop());
console.log("shift", newList.shift());
console.log("unshift", newList.unShift("Another"));
console.log(newList);
