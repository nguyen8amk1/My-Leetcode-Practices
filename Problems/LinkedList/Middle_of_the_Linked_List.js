const {ListNode, printLinkedList, createLinkedList} = require("../../Libs/LinkedList.js"); 

var middleNode = function(head) {
    let length = 0; 
    const recursive = (head, index) => {
        // 1. base case
        const reachedEnd = !head.next;
        if(reachedEnd) { 
            length = index + 1; 
            return head; 
        } 

        // 2, 3, 4
        // 2. increment the index
        //3. getting the middle 
        //console.log(head.val, index);
        let middle = recursive(head.next, index + 1);
        if(index == Math.floor(length/2)) {
            //console.log("ditme", Math.floor(length/2));
            middle = head;
        } 
        return middle;
    }

    return recursive(head, 0);
};

{
    // Test cases 1
    const list1 = createLinkedList([1, 2, 3, 4, 5, 6]);
    //printLinkedList(list1);
    const mid = middleNode(list1);
    console.log(mid);
}
{
    // Test cases 1
    const list1 = createLinkedList([1, 2, 3, 4, 5]);
    //printLinkedList(list1);
    const mid = middleNode(list1);
    console.log(mid);
}
