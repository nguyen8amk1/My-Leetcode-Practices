class TreeNode {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    setLeft(left) {
        this.left = left; 
    }

    setRight(right) {
        this.right = right; 
    }
}


const printBinaryTree = (root, prefix = "", isLeft = true) => {
    if (!root) {
        console.log("Empty tree");
        return;
    }

    if (root.right) {
        printBinaryTree(root.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${root.val}`);

    if (root.left) {
        printBinaryTree(root.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const createBinaryTree = (arr) => {
    if (!arr || arr.length === 0) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let currentNode = queue.shift();

        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }

    return root;
};


module.exports = {
    TreeNode, 
    printBinaryTree,
    createBinaryTree, 
}; 
