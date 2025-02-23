class TreeNode {
    constructor(val) {
        this.val = val;  // Value of the node
        this.left = null; // Left child of the node
        this.right = null; // Right child of the node
        this.height = 1;  // Initially, the height of a new node is 1
    }
}

class AVLTree {
    // Function to get the height of a node (used to calculate balance factor)
    height(node) {
        if (node === null) return 0;  // Return 0 for null nodes
        return node.height;  // Return the height of the node
    }

    // Function to get the balance factor of a node
    getBalanceFactor(node) {
        if (node === null) return 0;  // Return 0 for null nodes
        // Balance factor = height of left subtree - height of right subtree
        return this.height(node.left) - this.height(node.right);
    }

    // Right rotation to fix imbalance (Right-Right case)
    rightRotate(y) {
        let x = y.left;  // Set x as the left child of y
        let T2 = x.right;  // Set T2 as the right child of x

        // Perform rotation
        x.right = y;  // Make y the right child of x
        y.left = T2;  // Set T2 as the left child of y

        // Update heights of y and x
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

        return x;  // Return new root (x)
    }

    // Left rotation to fix imbalance (Left-Left case)
    leftRotate(x) {
        let y = x.right;  // Set y as the right child of x
        let T2 = y.left;  // Set T2 as the left child of y

        // Perform rotation
        y.left = x;  // Make x the left child of y
        x.right = T2;  // Set T2 as the right child of x

        // Update heights of x and y
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

        return y;  // Return new root (y)
    }

    // Left-Right rotation (double rotation) to fix imbalance
    leftRightRotate(node) {
        node.left = this.leftRotate(node.left);  // First, perform left rotation on the left child
        return this.rightRotate(node);  // Then, perform right rotation
    }

    // Right-Left rotation (double rotation) to fix imbalance
    rightLeftRotate(node) {
        node.right = this.rightRotate(node.right);  // First, perform right rotation on the right child
        return this.leftRotate(node);  // Then, perform left rotation
    }

    // Function to insert a node into the AVL tree
    insert(node, val) {
        // Step 1: Perform the normal BST insert
        if (node === null) return new TreeNode(val);  // If the node is null, create a new node

        // Insert the node like a regular BST
        if (val < node.val) {
            node.left = this.insert(node.left, val);  // Insert in the left subtree
        } else if (val > node.val) {
            node.right = this.insert(node.right, val);  // Insert in the right subtree
        } else {
            // Duplicate values are not allowed in the AVL tree
            return node;  // Return unchanged node if value already exists
        }

        // Step 2: Update the height of the current node
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));  // Set the height of the node

        // Step 3: Get the balance factor of the current node
        let balance = this.getBalanceFactor(node);  // Calculate balance factor

        // If the node becomes unbalanced, perform the appropriate rotations

        // Left-Left case: Right rotation
        if (balance > 1 && val < node.left.val) {
            return this.rightRotate(node);  // Perform right rotation
        }

        // Right-Right case: Left rotation
        if (balance < -1 && val > node.right.val) {
            return this.leftRotate(node);  // Perform left rotation
        }

        // Left-Right case: Left rotation followed by right rotation
        if (balance > 1 && val > node.left.val) {
            return this.leftRightRotate(node);  // Perform left-right rotation
        }

        // Right-Left case: Right rotation followed by left rotation
        if (balance < -1 && val < node.right.val) {
            return this.rightLeftRotate(node);  // Perform right-left rotation
        }

        // Return the (unchanged) node pointer
        return node;
    }

    // Function to print the inorder traversal of the AVL tree (for testing)
    inorderTraversal(root) {
        if (root !== null) {
            this.inorderTraversal(root.left);  // Traverse the left subtree
            console.log(root.val);  // Print the node's value
            this.inorderTraversal(root.right);  // Traverse the right subtree
        }
    }
}

// Example usage
let tree = new AVLTree();  // Create an instance of AVLTree
let root = null;  // Initialize the root as null

// Insert nodes into the AVL tree
root = tree.insert(root, 10);  // Insert node with value 10
root = tree.insert(root, 20);  // Insert node with value 20
root = tree.insert(root, 30);  // Insert node with value 30
root = tree.insert(root, 15);  // Insert node with value 15 (triggers Left-Right rotation)

// Print inorder traversal of the AVL tree
console.log("Inorder traversal of the AVL tree:");
tree.inorderTraversal(root);  // Should print: 10 15 20 30