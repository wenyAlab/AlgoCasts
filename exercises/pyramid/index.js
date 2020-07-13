// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return;
    }

    if (level.length === (2*n - 1)) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const middlePoint = Math.floor((2*n - 1) / 2);

    const add = (middlePoint - row <= level.length && middlePoint + row >=  level.length) ? '#' : ' ';
    pyramid(n, row, level + add);
}

module.exports = pyramid;



// function pyramid(n) {
//     const middlePoint = Math.floor((2*n - 1) / 2);

//     for (let row = 0;row<n;row++) {
//         let level = '';
//         for (let col=0;col<n * 2 - 1;col++) {
//             if (middlePoint - row <= col && middlePoint + row >= col) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level)
//     }
// }