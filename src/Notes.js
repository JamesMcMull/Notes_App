// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.getElementById('item');

// let items

// if (localStorage.getItem('items')){
//   items = JSON.parse(localStorage.getItem('items'));
// } else {
//   items = [];
// }

// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));

// const liMaker = (text) => {
//   const li = document.createElement('li');
//   li.textContent = text;
//   ul.appendChild(li);
// }

// form.addEventListener('submit', function (e){
// //button.addEventListener('click',function (e){
//   e.preventDefault();
//   itemsArray.push(input.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   liMaker(input.value);
//   input.value = "";
// })

// data.forEach((item) => {
//   liMaker(item);
// })

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value.substring(0, 20));
  input.value = "";
});

item.onClick( function ()) {
  $("value")
  localStorage.getItem('item')
  input.value = input.value;
}

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});

