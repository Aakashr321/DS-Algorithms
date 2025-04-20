/* Stacks: A stack is a fundamental data structure that operates on the principal
            of Last-In, First-Out(LIFO). 
=> Stacks are commonly used in :
    > Managing function invocations.
    > Routing(The history object) is treated like a stack.
    > Undo/Redo

=> There is more than one way of implementing a stack.
    > Using Array : By using push and pop methods on array
    > Using LinkedList
    > Using Dynamic Array
    > Using two Queues
    > Using Stack Library
*/

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* Pushing Pseudocode:
=> The function should accept a value.
=> Create a new node with that value.
=> If there are no nodes in the stack, set the first and last property 
    to be the newly created node.
=> If there is at least one node, create a variable that stores
    the current first property on the stack.
=> Reset the first property to be the newly created node.
=> Set the next property on the node to be the previously created variable.
=> Increment the size of the stack by 1.
=> Return the length of the stack
*/
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return ++this.size;
  }
  /* POP pseudocode:
  => If there are no nodes in the stack, return null.
  => Create a temporary variable to store the first property on the stack.
  => If there is only one node, set the first and last property to be null.
  => If there is more than one node, set the first property to be the
     next property on the current first.
  => Decrement the size by 1
  => Return removedNode
  */

  pop() {
    if (!this.first) return null;
    let removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = removedNode.next;
      removedNode.next = null;
    }
    this.size--;
    return removedNode.value;
  }
}

let stack = new Stack();
stack.push("Hello World");
stack.push("Hello World1");
stack.push("Hello World2");
stack.push("Hello World3");
stack.pop();
