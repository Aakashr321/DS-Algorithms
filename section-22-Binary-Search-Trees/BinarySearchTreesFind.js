/* Find pseudocode: Finding a node in BST (Steps Iteratively or Recursively)
=> Starting at the root
=> Check if there is a root, if not-we're done searching!
=> If there is a root, check if the value of the new node is the value we are looking for.
    >If we found it, we're done!
=> If not, check to see if the value is greater than or less than the value of the root
=> If it is greater
    >Check to see if there is a node to the right
    >If there is, move to that node and repeat these steps
    >If there is not, we're done searching!
=> If it is less
    >Check to see if there is a node to the left
    >If there is, move to that node and repeat these steps
    >If there is not, we're done searching!
=> If found! return the node
*/

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
        if (current.value === value) return undefined;
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
    if (this.root === null) {
      return null;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  find1(value) {
    if (this.root === null) {
      return null; // Return null if the tree is empty
    }
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left; // Move to the left child
      } else if (value > current.value) {
        current = current.right; // Move to the right child
      } else {
        return current; // Value found, return the node
      }
    }
    return null; // Value not found, return null
  }
}

//     10
//  5      13
//2   7  11  16
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(10);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(7);
console.log(tree.find(11));
