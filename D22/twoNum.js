function ListNode(val, next=null){
    this.val= val
    this.next= next
}

function addTwoNums(l1, l2){
    const dummy= new ListNode(0)
    let p=l1, q=l2 , current=dummy;
    let carry=0

    while(p !== null, q !== null){
        const x= (p !== null) ? p.val: 0;
        const y= (q !== null) ? q.val: 0;
        const sum= x + y + carry;
        carry= Math.floor(sum / 10);
        current.next= new ListNode(sum %10);
        current = current.next
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    if( carry> 0){
        current.next= new ListNode(carry);
    }
    return dummy.next;
}

//Helper function to create Linked List from array 
function create(arr) {
    const dummy= ListNode(0);
    let current= dummy
    arr.forEach(val => {
        current.next = new ListNode(val);
        current= current.next;
    });
}

//Helper function to print Linked List 
function print(list) {
    const result= []
    let current= list
    while(current !== null) {
        result.push(current.val)
        current = current.next
    }
    console.log(result.join(' ->'))
}

//Test Case
const l1= create([2,4,6])
const l2= create([3,5,7])
const sumList= addTwoNums(l1, l2)
print(sumList)