"use strict"

function bb(time) {
  let second=0,
  minute=0,
  oclock=0,
  days=0,
  year=0,
  out='';
if(time<0){return null;}
if(time==0){return "now";}

//СЕКУНДЫ

if (time>=60){
  second=time%60;
  time-=second;
  time/=60; } else {second=time; time=0;}

// Минуты

if(time>=60){
  minute=time%60;
time-=minute;
time/=60; } else {minute=time; time=0;}

//ЧАСЫ

if(time>=24){
oclock = time%24;
time-=oclock;
time/=24; } else {oclock=time;time=0;}

// ДНИ

if(time>=365){
  days=time%365;
  time-=days;
  time/=365;
  year=time; } else {days=time ;time=0;}

// сбор вывода

switch(second){
  case 0: break;
  case 1:  out =`${second} second`;
  break;
  default: out =`${second} seconds`;
}
switch(minute){
  case 0: break;
  case 1: if(out!=''){ out = `${minute} minute and ${out}`;} else {out = `${minute} minute`;}
  break;
  default: if(out!=''){ out =`${minute} minutes and ${out}`;} else {out = `${minute} minutes`;}
}
switch(oclock){
  case 0: break;
  case 1:if(second==0 && minute==0){out=`${oclock} hour`;} else if(second!=0 && minute!=0){ out =`${oclock} hour, ${out}`;} else{ out =`${oclock} hour and ${out}`;}
  break;
  default: if(second==0 && minute==0){out=`${oclock} hours`;} else if(second!=0 && minute!=0){ out =`${oclock} hours, ${out}`;} else{ out =`${oclock} hours and ${out}`;}
}
switch(days){
  case 0: break;
  case 1: if(second==0 && minute==0 && oclock ==0){ out = `${days} day`;} 
  else if(second!=0 && minute!=0 || second!=0 && oclock!=0 || oclock!=0 && minute!=0) {out=`${days} day, ${out}`;} 
  else {out=`${days} day and ${out}`;} 
  break;
  default:if(second==0 && minute==0 && oclock ==0){ out = `${days} days`;} 
  else if(second!=0 && minute!=0 || second!=0 && oclock!=0 || oclock!=0 && minute!=0) {out=`${days} days, ${out}`;} 
  else {out=`${days} days and ${out}`;}
  break;
}
switch(year){
  case 0: break;
  case 1: if(second==0 && minute==0 && oclock==0 && days==0){out=`${year} year`;}
  else if (second==0 && minute==0 && oclock==0 || second==0 && oclock==0 && days==0 || second==0 && minute==0 && days==0 || minute==0 && oclock ==0 && days==0 || minute==0 && oclock==0 && days==0){
    out=`${year} year and ${out}`;
  }else {out=`${year} year, `;}
  break;
  default: if(second==0 && minute==0 && oclock==0 && days==0){out=`${year} years`;}
  else if (second==0 && minute==0 && oclock==0 || second==0 && oclock==0 && days==0 || second==0 && minute==0 && days==0 || minute==0 && oclock ==0 && days==0 || minute==0 && oclock==0 && days==0){
    out=`${year} years and ${out}`;
  }else {out=`${year} years, ${out}`;}
  break;
}
return out;
}

function brightest(colors){  
  let colorIndex = 0,
      maxValue = 0;
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i],
        r = parseInt(color.slice(1,3), 16),
        g = parseInt(color.slice(3,5), 16),
        b = parseInt(color.slice(5,7), 16),
        value = Math.max(r,g,b);
        if (value > maxValue) {
      maxValue = value
      colorIndex = i
    }  
  }
  return colors [colorIndex]
}
  
function isIsogram(str){
  str=str.toLowerCase();
  const str2=str.split('');
  str=str.split('');
    for (let i =0; i<str.length; i++){
    for (let j =0; j<str.length; j++){
      if(i!=j){
        if(str[i]==str2[j]){
        return false;
      } else { continue; }
    }  
    }
  }
 return true;
}

const explode =(str)=>{
  let newStr='';
  str=str.split('');
    for(let i = 0; i<str.length;i++){
      for( let j=0; j<str[i]; j++){
        newStr+=str[i];
      }
    }
  return newStr;
}

console.log(explode('3323'));

function getParticipants(h){
  let k=1;
  for(let i=0;i<h;i+=k++);
  if(h==0){return 0;}
  if(h==1){return 2;}
  return k;
}


const duplicateEncode = (word) => {
  let newWord='';
  let bool=false;
  word=word.toLowerCase();
  const str2=word.split('');
  word=word.split('');
    for (let i =0; i<word.length; i++){
    for (let j =0; j<word.length; j++){
      if(i!=j){
        if(word[i]==str2[j]){
        bool=true;
      }
    }  
    }
    switch(bool){
      case true: newWord+=')'; break;
      case false: newWord+='('; break;
    }
    bool=false;
  }
 return newWord;
}

const nthFibo = (n) => {
  let first =0,
      now=0,
      next=0,
      second=1;
      if (n==1){return 0;}
      if (n==2){return 1;}
      if(n==3){return 1;}
      if(n==4){return 2;}
      for(let i=0; i<n-2; i++){
        next=second+first;        
        now=first+second;        
        first=second;        
        second=next;        
      }
      return now;
}



// let a = 5,
// b=a;
// b=b+5;
// console.log(b,a);


// let obj ={
//     a:5,
//     b:1
// };
// const copy = obj;
// copy.a=10;
// console.log(copy, obj);


// function copy(mainObj){
// let objCopy={};
// let key;
// for(key in mainObj){
//     objCopy[key]=mainObj[key];
// }
// return objCopy;
// }
// let numbers ={
//     a:2,
//     b:5,
//     c:{
//         x:7,
//         y:4
//     }
// };
// let newNumbers=copy(numbers);
// newNumbers.a=10;
// newNumbers.c.x=10;
// console.log(numbers);
// console.log(copy(numbers));
// console.log(newNumbers);


// const add ={
//     d:17,
//     e:20
// };
// let clone = (Object.assign({}, add));
// clone.d = 20;
// console.log(add, clone);


// let oldArray = ['a', 'b', 'c'];
// let newArray = oldArray.slice();
// newArray[1]='sad';
// console.log(newArray, oldArray);


// const video =['youtube','vimeo','rutube'],
//     blogs=['wod','live','blog'],
//     internet=[...video,...blogs, 'vk', 'facebook'];
//     console.log(internet);



    
    
// const num = [2,5,7];
// function log(a,b,c){ console.log(a);    console.log(b);   console.log(c); }
// log(...num)



// const array = ['a','b'];
// const newArr=[...array];
// newArr[0]='c';
// console.log(array, newArr);


// const q={
// one:1,
// two:2
// };
// const newObj={...q};
// newObj.one=3;
// console.log(q, newObj);



// let arr = [11,2,34,4,-5,6];
// let str = 'mfdlk dmfslkmf fdmslfm fdlskm';
// arr.sort(compareNum);
// function compareNum(a, b){
//     return a-b;
// }
// console.log(arr);
// arr.forEach(function(item, i, arr){
// console.log(`${i}: ${item} Внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);
// arr[99]=3;
// console.log(arr);
// for(let value of arr){
//     console.log(value);
// }


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log('test');
//     }
// };
// const {border, bg} = options.colors;
// options.makeTest();
// console.log(Object.keys(options).length);
// console.log(options.name);
// delete options.name;
// console.log(options);
// let counter=0;
// for (let key in options){
//     if(typeof(options[key])==='object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);

//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
        
//     }
// counter++;
// }
// console.log(counter);
//learnJS('JavaScript', first);
// function first(){
//     console.log('я прошел этот урок');
// }
// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// let str = "test/FEED";
// let arr = [1,4,9,3,2,43,23];
// str.toLocaleUpperCase();
// str.toLowerCase();


// // fruit.indexOf('q');
// let logg = 'Hello world!';

// logg.substr(6,3);

// let num = 12.49;
// console.log(Math.round(num));
// let fruit = '12px';
// console.log(parseFloat(fruit));

// console.log(Calc(10, 20));
// function Calc(i, j){
    
//     let num = i+j;
//     return num;
// }
// let logger = function(){
// console.log('hello');
// };
// logger();

// let calc = (a,b)=> {return a+b};
// console.log(calc(4,5));
//  num = 50;

// while (num < 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num--;
// }
// while (num > 50)

// for(let i=1; i< 10; i++){
// if (i===6){
//     // break;
//     continue;
// }
// console.log(i);
// }


//  num = 500;
// if (num < 49){
//     console.log('error !');
// } else if (num > 100){
//     console.log('more !');
// } else console.log("ok !");

// (num === 50) ? console.log("ok !"): console.log('error !');

// num = '50';

// switch (num) {
//     case '49': console.log('Less !');
//     break;
//     case '50': console.log('OK !');
//     break;
//     case '100': console.log('error !(More)');
//     break;
// }