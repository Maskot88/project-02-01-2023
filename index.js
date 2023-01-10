// debugger

// 1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.


const word = prompt();
/**
 *
 * @param {any} word
 * @returns {any}
 */
const wordReturn = function (word) {
  if (word === "" || word === null || Number.isNaN(Number(word))) {
    return "Error";
  }
  if (word % 2 === 0) {
    return "even";
  }
  return "odd";
};
console.log(wordReturn(word));

// 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

const value1 = 'sda';
const value2 = 333;
/**
 *
 * @param {any} value1
 * @param {any} value2
 * @returns {any || null}
 */
function returneSomething(value1, value2){
  if(typeof value1 === typeof value2){
    if (value1 > value2) return value1;
    if(value1 < value2) return value2;
  }else if(value1 === value2) return null;
  return null;
}
console.log(returneSomething(value1, value2))
