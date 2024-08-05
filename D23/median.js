//Find the median of the two sorted array


function findMedian(arr1, arr2) {
    const arr= arr1.concat(arr2).sort((a,b)=> a - b)
    const len = arr.length
    if (len %2 === 0) {
        return (arr[len/ 2 - 1] + arr[len/ 2]) / 2
    }
    else{
        return nums[Math.floor(len / 2)];
    }
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2]));   
console.log(findMedianSortedArrays([1, 2], [3, 4]));