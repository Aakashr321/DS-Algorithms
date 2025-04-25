/* QUEUES: A queue in data structure is a fundamental concept where elements
            are arranged in a sequence, and operations are performed based on the
            FIRST-IN, FIRST-OUT(FIFO)principle.     
 Queues are commonly used in :
 => Background Tasks
 => Updating Resources
 => Printing/Task processing.
*/

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* Enqueue Pseudocode:
  => This function accepts some value.
  => Create a new node using that value passed to the function.
  => If there are no nodes in the queue, set this node to be 
     the first and last property of the queue.
  => Otherwise, set the next property on the current last to be 
     that node, and then set the last property of the queue to 
     be that node.
  */

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }
  /* Dequeue Pseudocode 
=> If there is no first property, return null
=> Store the first property in a variable
=>See if the first is the same as the last(check if there is only 1 node).
  If so, set the first and last to be null.
=> If there is more than 1 node, set the first property to be the next property of first.
=> Decrement the size by 1.
=> Return the value of the node dequeued.
*/

  dequeue() {
    if (!this.first) return undefined;
    let current = this.first;
    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = current.next;
      current.next = null;
    }
    this.size--;
    return current.value;
  }
}

const queue = new Queue();
queue.enqueue("Test");
queue.enqueue("Aakash");
queue.enqueue("Rathore");
queue.dequeue();
console.log(queue);
