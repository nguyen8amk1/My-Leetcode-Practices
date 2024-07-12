const { TreeNode, printBinaryTree, createBinaryTree } = require("../../Libs/TreeNode.js");


const same = (treeone, treetwo) => {
    if(!treeone && !treetwo) return true;
    if(!treeone || !treetwo) return false;
    
    const leftSame = same(treeone.left, treetwo.left);
    const rightSame = same(treeone.right, treetwo.right);
    const currentSame = treeone.val == treetwo.val;

    return currentSame && leftSame && rightSame;
}

const dfs = (root, subroot) => {
    const reachedEnd = !root;
    if(reachedEnd) return false;
    
    const currentSubRoot = same(root, subroot);
    const leftSubRoot = dfs(root.left, subroot);
    const rightSubRoot = dfs(root.right, subroot);

    return currentSubRoot || leftSubRoot || rightSubRoot;
} 


{
    const root = [3,4,5,1,2], subRoot = [4,1,2];
    const val = dfs(createBinaryTree(root), createBinaryTree(subRoot));
    console.log(val);
}

{
    const root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2];
    const val = dfs(createBinaryTree(root), createBinaryTree(subRoot));
    console.log(val);
}

{
    const root = [1], subRoot = [1];
    //console.log("same: ", same(createBinaryTree(a), createBinaryTree(b)));
    const val = dfs(createBinaryTree(root), createBinaryTree(subRoot));
    console.log(val);
}
