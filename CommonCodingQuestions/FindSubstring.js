//Write a program to find a substring

function findSubstring(mainString, subString) {
    return mainString.includes(subString);
}

console.log(findSubstring("Hello, world!", "world")); // true
console.log(findSubstring("Hello, world!", "JavaScript")); // false