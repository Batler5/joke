'use strict';

const box = document.getElementById('box'),
     battons = document.getElementsByTagName('button'),
     circles = document.getElementsByClassName('circle'),
     wrapper = document.querySelector('.wrapper'),
     hearts = wrapper.querySelectorAll('.heart'),
     oneHeart = wrapper.querySelector('.heart');

     
//box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText='background-color: blue; width: 500px';
// battons[1].style.borderRadius='100%';
// circles[1].style.backgroundColor = 'green';

// for(let i=0; i<battons.length; i++){
//     battons[i].style.backgroundColor="green";
// }

// hearts.forEach(item=>{
// item.style.backgroundColor = 'green';
// });

const div = document.createElement('div');
// const text = document.createTextNode('тут был я');
div.classList.add('black');
// wrapper.prepend(div);
// hearts[0].after(div);
// circles[0].remove();
// hearts[0].replaceWith(battons[0]);
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[1]);
// div.textContent='hello';
wrapper.append(div);
div.innerHTML = '<h1>Hello world</h1>';
div.insertAdjacentHTML('afterend','<h2>Hello</h2>')

//console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
//console.log(document.querySelector('#current').parentElement);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
for (let node of document.body.childNodes){
     if(node.nodeName=='#text'){
          continue;
     }
     console.log(node);
}

