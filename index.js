let number = 2;
let number2 = 4;
let number3 = 7;

let result;
let result2;
let result3;
let result4;
if (number > 0 && number2 > 0) {
    result = number * number2;
} else if (number === 10 && number2 === -1 ) {
    result2 = number / number2;
} else if (number === 0 || number2 === 0) {
    result3 = number3;
} else  ( number === 0 && number2 === 0); {
    result4 = NaN;
}

console.log(result , result2, result3, result4)

let numberN = 11;
let res;
if (numberN > 0 && numberN % 2 === 0 && numberN % 3 === 0 && numberN % 6 === 0){
    console.log('win');
} else  {
    console.log('lose');
}

