/* Shift Pseudocode : Removing a node from the beginning of the LinkedList. 
=> If there are no nodes, return undefined.
=> Store the current head property in a variable
=> Set the head property to be the current head's next property
=> Decrement the length by 1
=> Return the value of the node removed
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
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
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
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
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
console.log(newList);
