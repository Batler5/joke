/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adb = document.querySelectorAll('.promo__adv img');
adb.forEach(item => {
item.remove();
});
const genre = document.querySelector('.promo__genre');
genre.textContent = 'Драма';
const promImg = document.querySelector('.promo__bg');
promImg.style.backgroundImage = 'url(img/bg.jpg)';
movieDB.movies.sort();
const last = document.querySelectorAll('.promo__interactive-item');
for(let i=0; i<5; i++){
    last[i].innerHTML = '';
}

for(let i =0; i<5; i++){
    last[i].innerHTML +=`<li class="promo__interactive-item">${i+1} ${movieDB.movies[i]}
    <div class="delete"></div>
    </li>`;
}


const addFilm = document.querySelector('.add button');
const nameFilm = document.querySelector('.adding__input');
addFilm.addEventListener('click',(event)=>{
    event.preventDefault();
    let textInput = nameFilm.value;
    if(textInput.length < 21) {
        movieDB.movies.push(nameFilm.value);
    } else {
        let newNameLongFilm='';
        let filmText = nameFilm;
        console.log(filmText);
        for(let i =0; i<17;i++){
            newNameLongFilm+=filmText[i];
        }
        newNameLongFilm+='...';
        console.log(newNameLongFilm);
    }
    
    console.log(movieDB.movies);
    movieDB.movies.sort();
        for(let i=0; i<last.length; i++){
        last[i].innerHTML = '';
        }   
        for(let i =0; i < last.length; i++){
        last[i].innerHTML +=`<li class="promo__interactive-item">${i+1} ${movieDB.movies[i]}
        <div class="delete"></div>
        </li>`;
        }
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