// const arr1 = [10, 20, 30, 40, 50, 60];
// const arr2 = [9, 8, 7,3];
// const summa = arr2.reduce(function(accumulator,currentValue){
//     return accumulator + currentValue;
// });
// // const arr3 = arr1.concat(arr2)
// // const arr3 = arr1.slice(2, -2);
// // const key = 3;
// console.log(arr1)
// const arr3 = arr1.splice(2,0,77,55,222,80)
// console.log(arr1);
// console.log(arr3);
// // console.log(arr1.indexOf(key,3));
// // console.log(arr1.lastIndexOf(key));
// // console.log(arr1.includes(key));

// /**
//  *
//  * @param {[string]} arr
//  * @param {string} str
//  * @returns {boolean}
//  */
// function hasElement(arr, str){
//     return arr.includes(str)
// }
// console.log(hasElement(['qwe'],'qwe'))

// /**
//  *
//  * @param {[number]} arr
//  * @returns {number | null}
//  */
// function geAverage(arr){
//     if(arr.length === 0){
//         return null;
//     }
//     // let summa = 0;
//     // for (let index = 0; index < arr.length; index++) {
//     //     summa += arr[index];
//     // }
//     const summa = arr.reduce(function(resAccum,elem){
//         return resAccum + elem;
//     });
//     return summa/arr.length;
// }

// const arr1 = [1,2,3,4,5];
// const result1 = arr1.reverse();
// console.log(arr1);
// console.log(result1);

// const arr2 = [1, 2, 3, 4, 5, 6];
// function arrF(array) {
//   const arr4 = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     arr4.push(array[i]);
//   }
//   return arr4;
// }
// console.log(arrF(arr2));

// /**
//  *
//  * @param {number} min
//  * @param {number} max
//  * @param {number} step default value = 1
//  * @returns {[number]} [numbers]
//  */
// function getArrayByRange(min,max,step=1){
//     if(min > max){
//         const buffer = min;
//         min = max;
//         max = buffer;
//     }
//     const arr = [];
//     for (let i = min; i <= max; i+=step) {
//         arr.unshift(i)
//     }
//     return arr;
// }
// console.log(getArrayByRange(33,18,2))

// // const arr1 = new Array(5);
// // arr1.fill("!");
// //тоже самое
// const arr1 = new Array(5).fill(0).concat(1,2,3).reverse();
// // arr1.splice(5,0,44,55);
// console.log(arr1);

// const users = [
//     {name:"Brad", age:59},
//     {name:"Tom", age:44},
//     {name:"Alex", age:35},
//     {name:"Rob", age:22},
//     {name:"Bob", age:16},
// ]
// const userName = users.find(function(user){
//     return user.age < 30;
// }).name;
// console.log(userName)

// const validateUsers = users.filter(function(user){
//     return user.age < 30;
// })
// console.log(validateUsers);

// function checkAge(currentElement){
//     return currentElement.age < 30;
// }

const key = 3;
const arr1 = [undefined,1, 2, 3, 4, 5,undefined, 6, 3, 7, 8, 9, 3, 3, null];

const summaEvenValues = arr1
  .filter(function (elem) {
    return elem % 2 === 0;
  })
  .reduce(function (accum, elem) {
    return accum + elem;
  });
console.log(summaEvenValues);

const countKey = arr1.filter(function (elem) {
  return elem === key;
}).length;
console.log(countKey);
const notEmptyValueArray = arr1.filter(function(elem){return elem})
console.log(notEmptyValueArray);
