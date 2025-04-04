/*Pop Pseudocode: Removing a node from the end of the linked List!
=> If there are no nodes in the list, return undefined
=> Loop through the list until you reach the tail
=> Set the next property of the 2nd to last to be null
=> Set the tail to be the 2nt to last node
=> Decrement the length of the list by 1
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
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
  //   traverse() {
  //     let current = this.head;
  //     while (current) {
  //       console.log(current.value);
  //       current = current.next;
  //     }
  //   }

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
    return current;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Hello1");
list.push("Hello2");
console.log("++", list.pop());
