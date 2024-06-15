const {ListNode, printLinkedList, createLinkedList} = require("../../Libs/LinkedList.js"); 

var mergeTwoLists = function(list1, list2) {
    // the 1 is done 
    if(!list1) return list2;
    if(!list2) return list1;

    // now do the 2, 3, 4
    // 2. before: choose node 
    if(list1.val < list2.val) {
        const chosenNode = list1;
        // 3. find the list to merge  
        const mergedList = mergeTwoLists(list1.next, list2);
        // 4. after merged list  
        chosenNode.next = mergedList;

        return chosenNode;
    } else {
        const chosenNode = list2;
        // 3. find the list to merge  
        const mergedList = mergeTwoLists(list1, list2.next);
        // 4. after merged list  
        chosenNode.next = mergedList;
        return chosenNode;
    }
};

{
    // Test cases 1
    //Input: list1 = [1,2,4], list2 = [1,3,4]
    //Output: [1,1,2,3,4,4]
    const list1 = createLinkedList([1, 2]);
    const list2 = createLinkedList([1]);
    const list = mergeTwoLists(list1, list2);
    printLinkedList(list);
}
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
    // Test cases 1
    //Input: list1 = [1,2,4], list2 = [1,3,4]
    //Output: [1,1,2,3,4,4]
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 2, 4]);
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


