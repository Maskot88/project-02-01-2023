// debugger

let word = prompt();
const wordReturn = function (value = 5) {
  if (value % 2 === 0) {
    return "even";
  }
  return "odd";
};
console.log(wordReturn(word));

// /**
//  *
//  * @param {number} value1
//  * @param {number} value2
//  * @returns {number | null}
//  */
// const returneValue = function (value1 = 55, value2 = 50) {
//   if (value1 > value2) {
//     return value1;
//   }
//   if (value1 < value2) {
//     return value2;
//   }
//   if (value1 === value2) {
//     return null;
//   }
//   return null;
// };
// console.log(returneValue());
