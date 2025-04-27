/* 
What is a tree ?
=> A data structure that consists of nodes in a parent/child relationship.

 => Lists are linear as compared to trees which are non-linear.
 Tree Terminology : 
 => Root : The top node in a tree
 => Child : A node directly connected to another node when moving away from the Root.
 => Parent : The converse notion f a child.
 => Siblings : A group of nodes with the same parent.
 => Leaf : A node with no children.
 => Edge : The connection between one node and another. 
 > Application of Trees :
  >HTML DOM
  >Network Routing
  >Abstract Syntax tree
  >Artificial Intelligence
  >Folders in OS.
*/

/* 
How Binary Search Tree (BST) works ?
=> Every parent node has at most two children.
=> Every node to the left of a parent node is always less than the parent.
=> Every node to the right of a parent node is always greater than the parent.
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
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.root.left.right = new Node(9);

console.log(tree.root);
