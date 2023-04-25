/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
        });
}

const makeChanges = () => {
    genre.textContent = 'Драма';
    promImg.style.backgroundImage = 'url(img/bg.jpg)';
} 
const sortArr = (arr) => {
    arr.sort();
}



function createMOvieList(films, parent){
    parent.innerHTML = "";
   films.forEach ((film, i) => {
    parent.innerHTML +=`<li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
        </li>`;
   });
}



const adb = document.querySelectorAll('.promo__adv img');
deleteAdv(adb);
const genre = document.querySelector('.promo__genre');
const promImg = document.querySelector('.promo__bg');
makeChanges();
sortArr(movieDB.movies);
const last = document.querySelectorAll('.promo__interactive-list');
createMOvieList(movieDB.movies, last);/*
for(let i=0; i<5; i++){
    last[i].innerHTML = '';
}

for(let i =0; i<5; i++){
    last[i].innerHTML +=`<li class="promo__interactive-item">${i+1} ${movieDB.movies[i]}
    <div class="delete"></div>
    </li>`;
}*/



const promoList = document.querySelector('.promo__interactive-list');
const addFilm = document.querySelector('form.add');
const nameFilm = document.querySelector('.adding__input');
const checkBox = addFilm.querySelector('[type="checkbox"]');
//1-2
addFilm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let textInput = nameFilm.value;
    const favuarite = checkBox.Checked;

    if(textInput.length < 21) {
        movieDB.movies.push(textInput);
        movieDB.movies.sort();
        createMOvieList(movieDB.movies, promoList)
    } else {
        let newNameLongFilm='';
        let filmText = nameFilm.value;
        for(let i =0; i<17;i++){
            newNameLongFilm+=filmText[i];
        }
        newNameLongFilm+='...';
        movieDB.movies.push(newNameLongFilm);
        movieDB.movies.sort();
        createMOvieList(movieDB.movies, promoList);
    }
    
});
//3







});



// const adv = document.querySelector('.promo__adv');
// adv.remove();
// const genre = document.querySelector('.promo__genre');
// genre.textContent='ДРАМА';
// const promo = document.querySelector('.promo__bg');
// promo.style.backgroundImage = 'url(img/bg.jpg)';

// const promoList = document.querySelector('.promo__interactive-list');
// promoList.innerHTML='';
// movieDB.movies.sort();
// movieDB.movies.forEach((item,i)=>{
// promoList.innerHTML+=`
// <li class="promo__interactive-item">${i+1} ${item}
// <div class="delete"></div>
// </li>`;
// });

// const adv = document.querySelectorAll('.promo__adv img');
// adv.forEach(item=>{
// item.remove();
// });