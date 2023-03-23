"use strict";

function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let start = intervals[0][0];
  let end = intervals[0][1];
  let sum = 0;
  for (let i = 1; i < intervals.length; i++) {
    let [s, e] = intervals[i];
    if (s <= end) {
      end = Math.max(end, e);
    } else {
      sum += end - start;
      start = s;
      end = e;
    }
  }
  sum += end - start;
  return sum;
}
// console.log(typeof(String(4)));

// const num =5;
// console.log("https://vk.com/catalog/"+num);
// const fontSize=26+'px';

// console.log(typeof(Number('4')));
// console.log(typeof((+'4')));
// console.log(typeof(parseInt("15px", 10)));

// let answer =+prompt("hello","");

// let switcher;
// if(switcher){
//     console.log("true");
// } else{
//     console.log("false");
// }

// console.log(typeof(Boolean(4)));

// const a = [1,2,3];
// const b = [1,2,3];
// console.log(a==b);


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