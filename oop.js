"use strict";


function hi(){
    console.log('Say hi!');
    // debugger;
}
hi();

const arr = [1,7,14,30,25],
        sorted = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}

console.log(arr);
console.log(sorted);
// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str), str);
// console.log(strObj);

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log('hello !');
//     }
// };


// const John={
//     health:100
// };

// const John = Object.create(soldier);
// John.__proto__=soldier;
// Object.setPrototypeOf(John, soldier);

// John.sayHello();