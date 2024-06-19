const { TreeNode, printBinaryTree, createBinaryTree } = require("../../Libs/TreeNode.js");

var maxDepth = function(root) {
    const reachedEnd = !root;
    if(reachedEnd) return 0; 
    
    const depthLeft = maxDepth(root.left); 
    const depthRight = maxDepth(root.right);
    
    const newDepthLeft = depthLeft + 1;
    const newDepthRight = depthRight + 1;
    
    return Math.max(newDepthLeft, newDepthRight);
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
