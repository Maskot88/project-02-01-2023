//constructor for prototype
function MyArrayPrototype(){
    this.push = function(value){
      this[this.length] = value;
      return ++this.length;
    }
  }
  //constructor with data
  function MyArray() {
    this.length = 0;
  }
  
  MyArray.prototype = new MyArrayPrototype();
  
// const myArrayNumbers = new MyArray();
// const myArrayNumbers2 = new MyArray();
// myArrayNumbers.push(777);
// console.log(myArrayNumbers[0]);
// console.log(myArrayNumbers);
// console.log(myArrayNumbers.push === myArrayNumbers2.push);

// const arrayNumbers = [];
// const arrayNumbers2 = new Array();
// arrayNumbers.push(555);
// console.log(arrayNumbers);
// console.log(arrayNumbers.push === arrayNumbers2.push);