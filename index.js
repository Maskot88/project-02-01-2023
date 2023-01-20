"use strict";





// Написати функцію, яка приймає масив чисел
// і повертає true, якщо в цьому масиві є два однакових числа поспіль
// Якщо не має - повертає false, якщо масив порожній - теж повертає false
// [1,2,3,4,5]->false
// [1,2,2,3,2]->true
function check(a) {
    for (let i=1; i<a.length; ++i) {
      if (a[i] === a[i-1]) {
        return true;
      }
    }
    
    return false;
  }
  
  console.log(check([3, 1, 1, 12]));