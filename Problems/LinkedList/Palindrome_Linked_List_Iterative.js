const {ListNode, printLinkedList} = require("../../Libs/LinkedList.js"); 

const removeElementRightAfter = (node) => {
    const aboutToBeDeletedNode = node.next; 
    node.next = aboutToBeDeletedNode.next;
    aboutToBeDeletedNode.next = null;
}

var removeElements = function(head, val) {
    // TODO: 1. base case 
    // TODO: 2, 3, 4
    
    // 2. forward code -- delete the node in the forward code 
    // 3. calling the recursion -- get the linkedlist head
    // 4. backward code 
};


{
    // Test cases 1
    const list1 = createLinkedList([1, 2, 3, 4, 5, 6]);
    //printLinkedList(list1);
    const mid = middleNode(list1);
    console.log(mid);
}
