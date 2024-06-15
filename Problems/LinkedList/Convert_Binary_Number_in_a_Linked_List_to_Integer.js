const {ListNode, printLinkedList, createLinkedList} = require("../../Libs/LinkedList.js"); 

var getDecimalValue = function(head) {
    let index = 0;

    const recursive = (head) => {
        // 1. base case 
        const reachTheEnd = !head.next; 
        if(reachTheEnd) { 
            const val = head.val*Math.pow(2, index);
            console.log(index, val);
            return val; 
        } 
        
        // 2, 3, 4
        // 2. before 
        // 3. get the decimalvalue
        const decimalvalue = recursive(head.next);
        // 4. combine the value 
        index++;
        console.log(index, decimalvalue);
        return head.val*Math.pow(2, index) + decimalvalue;
    }

    return recursive(head);
};


{
    // Test cases 1
    //Input: list1 = [1,2,4], list2 = [1,3,4]
    //Output: [1,1,2,3,4,4]
    const list1 = createLinkedList([1, 0, 1]);
    const value = getDecimalValue(list1);
    console.log(value);
}
