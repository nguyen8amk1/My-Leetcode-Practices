const { TreeNode, printBinaryTree, createBinaryTree } = require("../../Libs/TreeNode.js");


const height = (current) => {
    const reachedEnd = !current;
    if(reachedEnd) return 0;

    const leftHeight = height(current.left);
    const rightHeight = height(current.right);

    return Math.max(leftHeight, rightHeight) + 1;
}


const diameter = (current) => {
    
}

{
    const root = [1,2,3,4,5];
    console.log(diameter(createBinaryTree(root)));
}

{
    const root = [1,2];
    const tree = createBinaryTree(root);
    printBinaryTree(tree)
    console.log(diameter(createBinaryTree(root)));
}
