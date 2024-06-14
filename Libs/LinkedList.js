class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    setNext(next) {
        this.next = next; 
    }
}

const printLinkedList = (head) => {
    let current = head;
    let output = "";
    while(current) {
        output += `${current.val}->`;
        current = current.next;
    }
    if(output.length > 0)
        console.log(output);
    else console.log(null);
}

const createLinkedList = (arr) => {
    if(arr.length < 1) return null;
    const head = new ListNode(arr[0]);
    let current = head; 
    for(let i = 1; i < arr.length; i++) {
        current.setNext(new ListNode(arr[i]));
        current = head.next;
    }
    return head; 
}


module.exports = {
    ListNode, 
    printLinkedList,
    createLinkedList, 
}; 
