const {ListNode, printLinkedList, createLinkedList} = require("../../Libs/LinkedList.js"); 

var mergeTwoLists = function(list1, list2) {
    // TODO: print 2 list values first
    // base case
    // TODO: handle the case where the 2 list empty 
    if(!list1 && !list2) {
        return null;
    }

    // TODO: handle the case where the 2 nodes 1 have value and 1 null
    // const condition = ;
    if(!list1 && list2) {
        return list2; 
    }
    else if(list1 && !list2) {
        return list1; 
    }

    // TODO: handle the case where the 2 list have the same length
    if(!list1.next && !list2.next) {
        // TODO: merge the 2 node in ascending order
        let head = list1;
        let tail = list2;
        if(list1.val > list2.val) {
            head = list2;
            tail = list1; 
        }

        head.next = tail;
        tail.next = null;
        return head;
    }

    const mergedList = mergeTwoLists(list1.next, list2.next);
    let head = list1;
    let tail = list2;
    if(list1.val > list2.val) {
        head = list2;
        tail = list1; 
    }

    head.next = tail;
    tail.next = mergedList;
    return head;
};

{
    // Test cases 1
    //Input: list1 = [1,2,4], list2 = [1,3,4]
    //Output: [1,1,2,3,4,4]
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);
    const list = mergeTwoLists(list1, list2);
    printLinkedList(list);
}

{
    // Test cases 2
    // Input: list1 = [], list2 = []
    // Output: []
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([]);
    const list = mergeTwoLists(list1, list2);
    printLinkedList(list);
}

{
    // Test cases 3 
    // Input: list1 = [], list2 = [0]
    // Output: [0]
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([0]);
    const list = mergeTwoLists(list1, list2);
    printLinkedList(list);
}

{
    // Test cases 3 
    // Input: list1 = [], list2 = [0]
    // Output: [0]

    const list1 = createLinkedList([5]);
    const list2 = createLinkedList([1,2,4]);
    const list = mergeTwoLists(list1, list2);
    printLinkedList(list);
}


