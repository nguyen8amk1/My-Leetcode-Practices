const { TreeNode, printBinaryTree, createBinaryTree } = require("../../Libs/TreeNode.js");

const dfs = (treeone, treetwo) => {
    if(!treeone && !treetwo) {
        return true;
    } else if(!treeone || !treetwo){
        return false;
    }

    const sameLeft = dfs(treeone.left, treetwo.left);
    const same = treeone.val === treetwo.val;
    const sameRight = dfs(treeone.right, treetwo.right);

    return same && sameLeft && sameRight;
}


{
    const p = createBinaryTree([1, 2, 3]);
    const q = createBinaryTree([1, 2, 3]);

    console.log(dfs(p, q));
}

