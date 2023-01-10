//condition ? true : false

// function retParityWord(number = 6) {
//   return number % 2 === 0 ? "even" : "odd";
// }

// function isEven(number = 6) {
//   return number % 2 === 0;
// }

// const MAX_SUMMA = 10000;
// const MAX_SALE = 10;
// const MED_SUMMA = 5000;
// const MED_SALE = 5;
// const summa = 7345;
// const sale = summa > MAX_SUMMA ? MAX_SALE : summa > MED_SUMMA ? MED_SALE : 1;

// const result = 10 - (true ? 5 + 4 : 5 - 4);

// const number1 = 5;
// const number2 = 15;

// const result2 = (number1<number2) ? number1 : number2;

// const number = 30;
// // 5 3 2 1
// if (number % 5 === 0) {
//   console.log("multiple 5");
// }else if (number % 3 === 0) {
//   console.log("multiple 3");
// }else if (number % 2 === 0) {
//   console.log("multiple 2");
// }else if (number % 1 === 0) {
//   console.log("multiple 1");
// }

// const userInput = prompt("Choose Language:\n1 - ua\n2 - en\n3 - pl\n4 - fr");

// if (userInput === "1" || userInput === "ua") {
//   console.log("привет");
// } else if (userInput === "2" || userInput === "en") {
//   console.log("hi");
// } else if (userInput === "3" || userInput === "pl") {
//   console.log("czesc");
// } else if (userInput === "4" || userInput === "fr") {
//   console.log("he");
// } else {
//   console.log("lang not found");
// }

// switch (userInput) {
//   case "1":
//   case "ua":
//     console.log("привет");
//     break;
//   case "2":
//   case "en":
//     console.log("hi");
//     break;
//   case "3":
//     case "pl":
//     console.log("czesc");
//     break;
//   case "4":
//     case "fr":
//     console.log("he");
//     break;
//   default:
//     console.log("lang not found");
//     break;
// }

// const key = '1';
// switch (key) {
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log('default');
//       break;
// }

// const userInput = prompt(
//   "Choose seasons:\n1 - winter\n2 - spring\n3 - summer\n4 - fall");
// switch (userInput) {
//   case "1":
//   case "2":
//   case "3":
//     console.log("winter");
//     break;
//   case "4":
//   case "5":
//   case "6":
//     console.log("spring");
//     break;
//   case "7":
//   case "8":
//   case "9":
//     console.log("summer");
//     break;
//   case "10":
//   case "11":
//   case "12":
//     console.log("fall");
//     break;
// }

// const userInputAge = prompt("How old are you?");
// const userAge = Number(userInputAge);
// if (
//   userInputAge === null ||
//   userInputAge === "" ||
//   Number.isNaN(userAge) ||
//   userAge < 0 ||
//   userAge >= 150
// ) {
//   console.log("error")
// }else if (userAge<2){
//   console.log("baby")
// }else if (userAge<6){
//   console.log("kinder")
// }else if (userAge<12){
//   console.log("child")
// }else if (userAge<18){
//   console.log("tinager")
// }else if (userAge<65){
//   console.log("adult")
// }else if (userAge<100){
//   console.log("old")
// }else{
//   console.log("wow!!")
// }

// const userInput = prompt("Enter number day of month");
// const userDayNumber = Number(userInput);
// const DAY_MONTH_START = 1;
// const DAY_MAX_MUNTH_END = 31;
// const AMOUNT_DAY_OF_WEEK = 7;
// if (
//   userInput === null ||
//   userInput === "" ||
//   Number.isNaN(userDayNumber) ||
//   userDayNumber < DAY_MONTH_START ||
//   userDayNumber > DAY_MAX_MUNTH_END
// ) {
//   console.log("error");
// } else {
//   switch (userDayNumber % AMOUNT_DAY_OF_WEEK) {
//     case 1:
//       console.log("mn");
//       break;
//     case 2:
//       console.log("tu");
//       break;
//     case 3:
//       console.log("wd");
//       break;
//     case 4:
//       console.log("th");
//       break;
//     case 5:
//       console.log("fr");
//       break;
//     case 6:
//       console.log("sn");
//       break;
//     case 7:
//       console.log("wd");
//       break;
//     default:
//       console.log("error");
//       break;
//   }
// }

// let count = 0;
// while (count <= 20) {
//   if(count % 2 === 0){
//     console.log(count)
//   }
//   count++;
// }
// let count = 0;
// while (true) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
//   count++;
//   if (count > 20) breaak;
// }
//СЛОМАЕТ !!!!!!!!!!!!!

// let count = 0;
// while (true) {
//   if(count%2){
//     count++
//     continue;
//   }
//   console.log(count++);
//   if (count > 6) break;
// }

// for (let i = 0; i < 6; i++) {
//   if (i % 2) continue;
//   console.log(i);
// }
// for (let i = 0; i < 6; i += 2) {
//   if (i % 2) continue;
//   console.log(i);
// }

// while (true) {
//   const userInput = prompt("Enter number");
//   if (
//     userInput === "" ||
//     userInput === null ||
//     Number.isNaN(Number(userInput))
//   ) {
//     console.log('try again')
//     continue;
//   }
//   console.log(userInput);
//   break;
// }

// const PIN = '1111';

// while (PIN === '1111') {
//   const userInput = prompt("Enter PIN");
//   if (
//     userInput === "" ||
//     userInput === null ||
//     Number.isNaN(Number(userInput))
//   ) {
//     console.log('try again')
//     continue;
//   }
//   if(userInput === PIN)
//   console.log('Acsess');
//   break;
// }

// const PIN = '1111';
// while(true){
//   if(prompt('enter pin')===PIN) {
//     console.log('welcome');
//     break;
//   }
// }

// /**
//  *
//  * @param {number} number
//  * @returns {number || null}
//  */
// // 7! = 1*2*3*4*5*6*7
// const calcFactorial = function (number = 5) {
//   if (number < 0) {
//     return null;
//   }
//   if (number === 0 || number === 1) {
//     return 1;
//   }
//   let result =1;
//   for(let i=1; i<=number; i++){
//     result*= i;
//   }
//   return result;
// };

// console.log(calcFactorial()) //120
// console.log(calcFactorial(4)) //24

// const PIN = '1111';
// const MAX_TRY = 3;
// let amount_try = 0;
// while(true){
//   if(amount_try>=MAX_TRY){
//     console.log('try again');
//     break;
//   }
//   if(prompt('enter pin')===PIN) {
//     console.log('welcome');
//     break;
//   }
//   amount_try++;
// }

// const PIN = '1111';
// const MAX_TRY = 3;
// for(let i=0; i<MAX_TRY; i++){
//   if(prompt('enter pin') === PIN){
//     console.log('welcome');
//     break;
//   }
//   console.log(MAX_TRY-i-1);
// }

// Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби
// зробити двома способами через while і for
// * це повинна бути функція(можливо і не одна)

// let num = '24';
// while(true){
//   if(prompt('Enter number') === num) {
//     console.log('WOW');
//     break;
//   }
// }
// /**
//  *
//  * @param {number} num
//  * @returns {number}
//  */
// const numN = function(num){
//   if(num > 15 && num < 35 && num % 6);
//   result = num = 24;
// }

// const num = "18, 24, 30";
// for (let i = 0; ; i++) {
//   if (prompt("Enter number") === num) {
//     console.log("WOW");
//     break;
//   }
// }

// const numN = function (num) {
//   if (num > 15 && num < 35 && num % 6);
//   result = num(18, 24, 30);
// };

