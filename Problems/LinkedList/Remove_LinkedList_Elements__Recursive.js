const {ListNode, printLinkedList, createLinkedList} = require("../../Libs/LinkedList.js"); 

const removeElementRightAfter = (node) => {
    if(!node) return
    if(!node.next) return;
    const aboutToBeDeletedNode = node.next; 
    node.next = aboutToBeDeletedNode.next;
    aboutToBeDeletedNode.next = null;
    return node; 
}

// NOTE: haven't done 
var removeElements = function(head, val) {
    // TODO: 1. base case 
    const reachedEnd = !head.next; 
    if(reachedEnd) return;
    // TODO: 2, 3, 4
    
    // 2. forward code -- delete the node in the forward code 
    if(head.next.val === val)  {
        removeElementRightAfter(head);
    }

    if(head.next)
    // 3. calling the recursion -- get the linkedlist head
        removeElements(head.next, val);
    // 4. backward code 
    return head; 
};


{
    // Test cases 1
    const list1 = createLinkedList([1, 2, 3, 6, 4, 5, 6]);
    //printLinkedList(list1);
    printLinkedList(list1);
    //removeElementRightAfter(list1);
    const result = removeElements(list1, 6);
    printLinkedList(result);
}

{
    // Test cases 1
    const list1 = createLinkedList([7, 7, 7, 7]);
    //printLinkedList(list1);
    printLinkedList(list1);
    //removeElementRightAfter(list1);
    const result = removeElements(list1, 7);
    printLinkedList(result);
}

// {
//     // Test cases 1
//     const list1 = createLinkedList([1]);
//     //printLinkedList(list1);
//     printLinkedList(list1);
//     const result = removeElementRightAfter(list1);
//     printLinkedList(result);
// }
//
// {
//     // Test cases 1
//     const list1 = createLinkedList([]);
//     //printLinkedList(list1);
//     printLinkedList(list1);
//     removeElementRightAfter(list1);
//     printLinkedList(list1);
// }
