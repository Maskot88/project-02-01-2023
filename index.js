
let number = 2;
let number2 = 4;
let number3 = 7;

let result;
if ((number > 0 && number2 > 0) || (number < 0 && number2 < 0)) {
    result = number * number2;
} else if ((number > 0 && number2 < 0) || (number < 0 && number2 > 0)) {
    result = number / number2;
} else if (number === 0 && number2 === 0) {
    result = NaN;
} else if (number === 0 || number2 === 0) {
    result = number3;
}

console.log(result);

let numberN = 11;
if (!(numberN > 0 && numberN % 2 === 0 && numberN % 3 === 0 && numberN % 6 === 0)) {
    console.log('lose');
} else  {
    console.log('win');
}

// let numberN = 12;
// if (numberN > 0 && numberN % 2 === 0 && numberN % 3 === 0 && numberN % 6 === 0) {
//     console.log('win');
// } else  {
//     console.log('lose');
// }
