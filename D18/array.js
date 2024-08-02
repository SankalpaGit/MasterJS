/*
Activity : Array Algorithms
*/ 

//Task : Rotate an Array by K Positions


function rotateArray(arr, k) {
    k=  k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateArray([1,2,3,4,5], 2));


//Task : Merge Two Sorted Arrays into One Sorted Array

function merger(arr1, arr2) {
    let merged= [];
    let i= 0;
    let j= 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        }
        else{
            merged.push(arr2[j]);
            j++;
        }
    }

    while( i < arr1.length){
        merged.push(arr1[i]);
        i++;
    }
    while( j < arr2.length){
        merged.push(arr2[i]);
        j++;
    }

    return merged
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));