const { TreeNode, printBinaryTree, createBinaryTree } = require("../../Libs/TreeNode.js");

var invertTree = function(root) {
    
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
