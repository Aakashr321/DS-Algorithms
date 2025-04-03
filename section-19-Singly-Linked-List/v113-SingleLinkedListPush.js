/* What is Singly Linked list?
=> A data structure that contains a head, 
tail and length property.

=> Linked lists consists of nodes, and each node has a 
value and a pointer to another node or null.
*/

//pice of data
//reference to next-node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Adding a new node to the end of the Linked list!
  /* Pushing Pseudocode
  => This function should accept a value
  => Create a new node using the value passed to the function
  => If there is no head property on the list, set the head and tail 
  to be the newly created node
  =>Otherwise set the next property on the tail to be the new node
  and set the tail property on the list to be the newly created node.
  => Increment the length by one
  =>Return the linked list
  */
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
    return this;
  }
}

list = new SinglyLinkedList();
