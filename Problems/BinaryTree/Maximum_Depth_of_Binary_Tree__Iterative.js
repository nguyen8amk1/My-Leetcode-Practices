const { TreeNode, printBinaryTree, createBinaryTree } = require("../../Libs/TreeNode.js");

var maxDepth = function(root) {
    
};

{ 
    const root = createBinaryTree([3,9,20,null,null,15,7]);
    //printBinaryTree(root);

    const depth = maxDepth(root);
    console.log(depth);
}

{ 
    const root = createBinaryTree([1, null, 2]);
    //printBinaryTree(root);

    const depth = maxDepth(root);
    console.log(depth);
    //printBinaryTree(newRoot);
}
