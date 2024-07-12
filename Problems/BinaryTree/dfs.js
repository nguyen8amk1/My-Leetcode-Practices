const { TreeNode, printBinaryTree, createBinaryTree } = require("../../Libs/TreeNode.js");


const dfs = (current) => {
    const reachedEnd = current == null;
    if(reachedEnd) {
        return;
    }

    dfs(current.left);
    console.log(current.val);
    dfs(current.right);
}

{ 
    const root = createBinaryTree([3,9,20,null,null,15,7]);
    printBinaryTree(root);
    dfs(root);
}
