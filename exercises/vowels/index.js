// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Iterative solution not using includes
function vowels(str) {
    const revisedString = cleanStr(str).split("");
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let index = 0; index < revisedString.length; index++) {
        for (let vowelIndex = 0; vowelIndex < vowel.length; vowelIndex++) {
            if (vowel[vowelIndex].indexOf(revisedString[index]) > -1) {
                vowelCount++
            }
        }
    }
    return vowelCount
}

function cleanStr(str) {
    return str.replace(/[^\w]/g, "").toLowerCase()
}


// Iterative solution using includes method
function vowels(str){
    let count = 0;
    const vowelArray = ['a','e','i','o','u'];
    for (let char of str.toLowerCase()){
        if (vowelArray.includes(char)){
            count++
        }
    }
    return count;
}

// Solution using regular expression
function vowels(str){
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

module.exports = vowels;
