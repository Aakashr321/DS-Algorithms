/* Remove : Removing a node in Doubly Linked list at certain position.
Remove Pseudocode : 
=> If the index is less than zero or greater than or equal to the length return undefined.
=>If the index is 0, shift.
=> If the index is the same as the length-1, pop.
=> Use the get method to retrieve the item to be removed.
=> Update the next and prev properties to remove the found node from the list.
=> Set the next and prev to null on the found node.
=> Decrement the length.
=> Return the removed node.
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
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return undefined;
    let poppedNode = this.tail;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.next = null;
      this.tail = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.length) return undefined;
    let oldHead = this.head;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let middle = Math.floor(this.length / 2);
    let current;
    if (index < middle) {
      let i = 0;
      current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current;
    } else {
      let j = this.length - 1;
      current = this.tail;
      while (j > index) {
        current = current.prev;
        j--;
      }
      return current;
    }
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
    if (index === 0) return this.unShift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let foundNode = this.get(index - 1);
    let nextNode = foundNode.next;
    if (foundNode) {
      newNode.next = nextNode;
      foundNode.next = newNode;
      newNode.prev = foundNode;

      if (nextNode) {
        nextNode.prev = newNode;
      }
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    let removedNode = this.get(index);
    if (!removedNode) return undefined;
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    if (prevNode) {
      prevNode.next = nextNode;
    }
    if (nextNode) {
      nextNode.prev = prevNode;
    }

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

const newList = new DoublyLinkedList();
newList.push(5);
newList.push(6);
newList.push(7);
newList.push(8);
newList.pop();
newList.shift();
newList.unShift(2);
console.log();
console.log(newList);
