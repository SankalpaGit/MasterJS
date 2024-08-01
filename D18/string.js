//String Algorithms

//Task =  Count the Occurrences of Each Character in a String

function countCharacterOccurrences(str) {
    let counts = {};
  
    for (let char of str) {
      counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    return counts;
  }
  // Test cases
  console.log(countCharacterOccurrences("hello")); 


//Task : Find the Longest Substring Without Repeating Characters

function findLongestSubstring(str) {
    let maxLength = 0
    let start = 0
    let charIndex=0

    for (let end=0; end<str.length; end++) {
        let char = str[end]
        if (charIndex[char] !== undefined) {
            start= Math.max(charIndex[char]+ 1, start)
        }
        charIndex[char] = end
        maxLength = Math.max(maxLength, end - start + 1) 

    }
    return maxLength
}
console.log(findLongestSubstring("abcabcbb"));