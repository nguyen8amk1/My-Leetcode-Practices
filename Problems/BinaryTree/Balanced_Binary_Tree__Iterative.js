const { TreeNode, printBinaryTree, createBinaryTree } = require("../../Libs/TreeNode.js");

// NOTE: what is height-balanced ?? 
// height-balanced: ...@Later
//
//
//
//
//

const height = (root) => {
    // 1. base case    
    const reachedEnd = !root; 
    if(reachedEnd) return 0;

    const heightLeft = height(root.left) + 1; 
    const heightRight = height(root.right) + 1; 

    return Math.max(heightLeft, heightRight);
}

var isBalanced = function(root) {
    
};

{ 
    const root = createBinaryTree([3,9,20,null,null,15,7]);
    printBinaryTree(root);
    console.log(isBalanced(root));
}

{ 
    const root = createBinaryTree([1,2,2,3,3,null,null,4,4]);
    printBinaryTree(root);

    console.log(isBalanced(root));
}

{ 

    const root = createBinaryTree([1,2,2,3,null,null,3,4,null,null,4]);
    printBinaryTree(root);

    console.log(isBalanced(root));
}
