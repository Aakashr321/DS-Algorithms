class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value === current.value) {
        found = true;
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }

  remove(value) {
    if (this.root === null) return undefined;
    let current = this.root;
    let parent = null;

    //Find the node to remove and it's parent
    while (current && current.value !== value) {
      parent = current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (current === null) return undefined;

    //Node with no children
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null; //Tree becomes empty
      } else if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    //Node with one child
    else if (current.left === null || current.right === null) {
      const child = current.left ? current.left : current.right;

      if (current === this.root) {
        this.root = child;
      } else if (parent.left === current) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    }

    //Node with two children
    else {
      //Find in the order successor (smallest in the right subtree)
      let successor = current.right;
      let successorParent = current;

      while (successor.left !== null) {
        successorParent = successor;
        successor = successor.left;
      }

      //Replace current's value with the successor's value
      current.value = successor.value;

      //Remove the successor
      if (successorParent.left === successor) {
        successorParent.left = successor.right; //Link parent to successor's right child
      } else {
        successorParent.right = successor.right; //Link parent to successor's right child
      }
    }
    return current; //Return the removed node
  }
}
