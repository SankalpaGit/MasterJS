//Day 2 operators 
//WTP to find to add , sub , div and mul the number

function operation1(x,y){  //for finding the sum
    summ=x+y
    return summ
}

function subOp(x,y){ //for subtracting the number
    diff= x-y
    return diff
}
//for the divide and multiply operation we can done in similar way
console.log(operation1(1,2))
console.log(subOp(8,2))


//Task : WTP for finding the reminder  when the number is devided 

function reminder(x,y){
    divider= x%y;
    return divider
}

console.log('The reminder is',reminder(35,6))
