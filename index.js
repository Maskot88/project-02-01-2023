// debugger
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

const userInputAge = prompt("How old are you?");
const userAge = Number(userInputAge);
if (
  userInputAge === null ||
  userInputAge === "" ||
  Number.isNaN(userAge) ||
  userAge < 0 ||
  userAge >= 150
) {
  console.log("error")
}else if (userAge<2){
  console.log("baby")
}else if (userAge<6){
  console.log("kinder")
}else if (userAge<12){
  console.log("child")
}else if (userAge<18){
  console.log("tinager")
}else if (userAge<65){
  console.log("adult")
}else if (userAge<100){
  console.log("old")
}else{
  console.log("wow!!")
}