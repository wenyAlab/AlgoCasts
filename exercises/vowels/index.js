// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0
// 输出字符串中包含的元音

function vowels(str) {
    const matchs = str.match(/[aeiou]/gi);
    return matchs ? matchs.length : 0;
}

module.exports = vowels;



// function vowels(str) {
//     let vCount = 0;
//     const vowelArr = ['a','e','i','o','u'];

//     for (let i of str.trim().split('')){
//         if (vowelArr.indexOf(i.toLowerCase()) !== -1) {
//             vCount ++;
//         }
//     }
//     return vCount;

// }

// function vowels(str) {
//     let vCount = 0;
//     const vowelArr = ['a','e','i','o','u'];

//     for (let i of str.toLowerCase()){
//         if (vowelArr.includes(i)) {
//             vCount ++;
//         }
//     }
//     return vCount;

// }