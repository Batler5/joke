"use strict"
 const btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay'),
    img = document.querySelector('.user__img');    
    console.log(btn);
    btn[0].style.backgroundColor='red';
    btn[1].style.borderRadius = '100%';
    for (let i =0; i<btn.length; i++){
        btn[i].style.height = '50px';
        btn[i].style.borderColor = 'green';
        btn[i].style.borderWidth = '5px';  
      }
    btn.forEach(item=>{
        item.style.marginLeft = '12%';
    });
    const div = document.createElement('div');
    const text = document.createTextNode('шляпа усатая');   
    div.classList.add('black'); // button   
    div.style.height = '100px';
    div.style.width = '900px';
    div.style.backgroundColor = 'red';
    //document.body.append(div);
    document.body.append(text);
    img.before(div);
   // btn[2].remove();  //document.removeChild(btn[2]);
   // overlay.replaceChild(btn[0], btn[1]);
  div.innerHTML = "<h1>Hello World</h1>";
  div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
    //div.textContent = "HeHeHEHE";

    // Обработчики события

    btn[1].onclick = function() {
        alert('eto ne rabotaet');
    } 
    btn[1].onclick = function() {
        alert('onclick 2 button');
    } 
    btn[2].addEventListener('click', ()=>{
        alert('click 3 button');
    });
    btn[0].addEventListener('mouseenter', (e)=>{
        console.log('hover first button', e.target);
        //e.target.remove();
    });  
    const dell = (event)=>{
        console.log(event.currentTarget);
        console.log(event.type);
        //console.log(event.target);
    };
    overlay.addEventListener('click', dell);
    const lab = document.querySelector('label');
    lab.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('PPPPDLS how he is search it ?');
    });
    btn.forEach((item)=>{
        item.addEventListener('click', dell, {once: true});
    });
    



    
    //console.log(document.body);
    //console.log(document.documentElement);
    //console.log(document.body.childNodes);
    // console.log(document.body.firstChild);
    // console.log(document.body.lastChild);
    // console.log(document.querySelector('.text').parentNode);
    // console.log(document.querySelector('.text').parentNode.parentNode);







// btn.onclick= function(){
//     alert('Cliiiiick');
// };
// btn.onclick= function(){
//     alert('Second Cliiiiick');
// };
//console.log(Math.pow(82,Math.pow(33, 33)));

// btn.addEventListener('click', dell);
// overlay.addEventListener('click', dell);

// const link = document.querySelector('a');

// link.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log(e.target);
// });




// let personalMovieDB = 
// {
//     count : 0,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false,
//     rememberMyFilms: function(){
//         for (let i =0; i<2; i++){
//         let a = prompt('Один из последних просмотренных фильмов ?', ''),
//          b = prompt('На сколько оценете его ?', '');
//         if (a!=null && a.length < 50 && a != '' && b>=0 && b<=10){
//            personalMovieDB.movies[a]=b;
//            console.log('OK!');
//         } else {
//             console.log('error !');
//             i--;
//             alert('Введены не корректные данные, повторите ещё раз.');
//         }
//     }
//     },   
//     detectPersonalLevel: function(){
//         if(personalMovieDB.count<=10){
//         alert('Просмотрено довольно мало фильмов.');
//     } else if (personalMovieDB.count >10 && personalMovieDB.count <=30){
//         alert('Вы классический зритель.');
//     } else if(personalMovieDB.count>30){alert('Вы киноман!');}
//     else {console.log('Произошла ошибка.');}
//     },
//      writeYourGeners: function(){
//         for(let i =1; i<4; i++){
//         this.genres[i-1]=prompt('Ваш любимый жанр под номером '+i,'');
//         if(this.genres[i-1]==null || this.genres[i-1]==''){
//             alert('Введены некорректные данные, попробуйте ещё раз');
//             i--;
//         }
//     }  
//     personalMovieDB.genres.forEach(function(item,i,genres){
//     console.log(`Любимый жанр ${i+1} - это ${item}`);
//     });      
//     },
//     showMyDB: function(){
//     if(!personalMovieDB.privat){console.log(personalMovieDB);}
//     },
//     start: ()=>{
//     personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели ?', '');
//     while(personalMovieDB.count=='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//         personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели ?', '');
//     }
//     },
//     toggleVisibleMyDB: ()=>{
//     if(this.privat){this.privat=false;}else{this.privat=true;}
//     }
// };
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGeners();
// personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();








// let i=0
// while (i<2){
//     let a = prompt('Один из последних просмотренных фильмов ?', ''),
//      b = prompt('На сколько оценете его ?', '');
//     if (a!=null && a.length < 50 && a != '' && b>=0 && b<=10){
//        personalMovieDB.movies[a]=b;
//        console.log('OK!');
//     } else {
//         console.log('error !');
//         i--;
//         alert('Введены не корректные данные, повторите ещё раз.');
//    }
//    i++;
// }
// console.log("arr"+" - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

//     // ++incr;
//     // --decr;
//     console.log(5113%25);

//     console.log(2+2*2!='6');
    
//     const isChecked = false,
//     isClose = false;
//     console.log(isChecked || !isClose);


    // const answers = [];

// answers[0] = prompt('Ваше имя', '');
// answers[1] = prompt('Ваш возраст', '');
// answers[2] = prompt('Ваш вес', '');

// console.log(typeof(answers));
// console.log(typeof(null));
// const answer = +prompt("Вам есть 18 ?", "18");
// console.log((answer)+5);

// const result = confirm("Are you here ?");
// console.log(result);


// alert('Hello mf');

// const obj = {
// name : "John",
// age: 25,
// isMarried:false
// };

//  console.log(obj ['name']);
// let arr = ['plum.png', 'orange.jpeg', 'apple.bmp',6 , {fal: true}, [false, true, false]];

// console.log(arr[3]);

// let a = 4.6;
// console.log(-4/0);
// console.log('string'*9);

// const persone = "Alex";

// const bool = false;

// let something;
// console.log(something);

// console.log(39247);
// let number = 7;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const Obj = {
// a:50

// }
// Obj.a=10;
// console.log(Obj);


// var name = 'Ivan'; name = 'Alex';console.log(name);


// {

//     var result = 50;
// }
// console.log(result);

// alert(5);
// [].push('a');