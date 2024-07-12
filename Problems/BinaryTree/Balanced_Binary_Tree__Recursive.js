const { TreeNode, printBinaryTree, createBinaryTree } = require("../../Libs/TreeNode.js");

// NOTE: what is height-balanced ?? 
// height-balanced: the height of the left subtree and the right subtree of any node 
// does not differ more than 1 
//
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


var isBalanced = function(current) { // basically a DFS
    // TODO: 
    const reachedEnd = current == null;
    if(reachedEnd) {
        return true;
    }

    const leftHeight = height(current.left);
    const rightHeight = height(current.right);

    const currentBalance = Math.abs(leftHeight - rightHeight) < 2;

    const balanceLeft = isBalanced(current.left);
    const balanceRight = isBalanced(current.right);

    //console.log(current.val, current.left?.val, current.right?.val, currentBalance, balanceLeft, balanceRight);

    return currentBalance && balanceLeft && balanceRight; 
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
