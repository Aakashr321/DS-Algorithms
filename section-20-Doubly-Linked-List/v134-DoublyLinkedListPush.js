/* Push : Adding a new node at the end of the doubly linked list.
Pushing Pseudocode : 
=> Create a new node with the value passed to the function.
=> If the head property is null set the head and tail to be the newly created node.
=> If not, seth the next property on the tail to be that node.
=> Set the previous property on the newly created node to be the tail
=> Set the tail property to be the newly created node
=> Increment the length
=> Return the doubly linked list
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
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();

list.push(99);
list.push(100);
console.log(list);
