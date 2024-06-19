const {ListNode, printLinkedList, createLinkedList} = require("../../Libs/LinkedList.js"); 

var isPalindrome = function(head) {
    // 1. base case
    let forwardString = "";
    let backwardString = "";

    const recursive = (head) => {
        const reachedEnd = !head.next;
        if(reachedEnd) { forwardString += head.val; backwardString += head.val; return head; }
        // 2, 3, 4
        forwardString += head.val
        recursive(head.next);
        backwardString += head.val;
    }

    recursive(head);
    //console.log(forwardString, backwardString);
    return forwardString === backwardString;
};

{
    // Test cases 1
    //
    const list1 = createLinkedList([1,2]);
    //printLinkedList(list1);
    const mid = isPalindrome(list1);
    console.log(mid);
}

{
    // Test cases 1
    //
    const list1 = createLinkedList([1,2,2,1]);
    //printLinkedList(list1);
    const mid = isPalindrome(list1);
    console.log(mid);
}
