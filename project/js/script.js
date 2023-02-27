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


const adverts = document.querySelectorAll('.promo__adv img');
adverts.forEach(items=>{
items.remove();
});


const poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    interActive = document.querySelector('.promo__interactive-list');

genre.textContent='ДРАМА';


poster.style.backgroundImage = 'url(img/bg.jpg)'

interActive.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i)=>{
interActive.innerHTML +=`
<li class="promo__interactive-item">${i+1} ${film}
    <div class="delete"></div>
    </li>
`

});

