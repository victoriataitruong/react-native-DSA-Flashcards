//Write a program to reverse a string

function reverseString(str) {
    //Splits the string into an array of characters.
    //Reverses the array.
    //Joins it back into a string.
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"

