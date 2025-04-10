/* What is Doubly LinkedList?
=> A doubly linked list is a type of linked list where 
   each node contains a pointer to both next and previous node,
   enabling traversal in both direction.
*/

class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
