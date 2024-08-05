function lengthOfLongestSubstring(s) {
    const map = new Map();
    let start = 0, maxLength = 0;
    
    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));    