const { TreeNode, printBinaryTree, createBinaryTree } = require("../../Libs/TreeNode.js");

var invertTree = function(root) {
    // 1. 
    const reachedEnd = !root;
    if(reachedEnd) return root;
    // 2. forward 
    // // TODO: swap left, right 
    const temp = root.left; 
    root.left = root.right; 
    root.right = temp;
    // 3. entry: left, right
    invertTree(root.left);
    invertTree(root.right);
    // 4. backward 
    return root;
};

{ 
    const root = createBinaryTree([4,2,7,1,3,6,9]);
    printBinaryTree(root);

    const newRoot = invertTree(root);
    printBinaryTree(newRoot);
}

{ 
    const root = createBinaryTree([1, 2]);
    printBinaryTree(root);

    const newRoot = invertTree(root);
    printBinaryTree(newRoot);
}
