//  Implement the Linear Search Algorithm

function linearSearch(arr, target){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===target) {
            return i; //return the index of target value
        }
    }
    return -1; //return the value -1 if target not found
}
console.log(linearSearch([1,2,3,4,5],5))

//Implement the Binary Search Algorithm

function binarySearch(arr, target){
    let left=0;
    let right = arr.length-1;

    while (left <= right) {
        let mid= Math.floor((left + right) /2);

        if (arr[mid]===target) {
            return mid; //return the index of target value
        }
        else if (arr[mid]<target) {
            left= mid + 1;
        }
        else{
            right= mid -1;
        }
    }
    return -1; //return the -1  if index is not found
}

//Test case for Binary search
console.log(binarySearch([1,2,3,4,5],5));