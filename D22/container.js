function maxArea(height) {
    let maxWater = 0, left = 0, right = height.length - 1;
    
    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, width * minHeight);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));               