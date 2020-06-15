// anagram.js
// Sample Input

// cde
// abc
// Sample Output

// 4
// Explanation

// We delete the following characters from our two strings to turn them into anagrams of each other:

// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// We must delete  characters to make both strings anagrams, so we print  on a new line.

function makeAnagram(a, b) {
    let counter = 0

    function isAnagram(a, b) {
        return a.toLowerCase().split('').sort().join('').trim() === b.toLowerCase().split('').sort().join('').trim()
    }

    if (isAnagram(a, b))
        return counter
    else {
        let dict = {};
        a.split('').map(char => dict[char] = (dict[char] || 0) + 1); // increment
        b.split('').map(char => dict[char] = (dict[char] || 0) - 1); // decrement
        console.log(dict, 'whole freq hist')
        return Object.keys(dict).reduce((sum, key) => sum + Math.abs(dict[key]), 0);
    }
}

const res = makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke');
console.log(res)