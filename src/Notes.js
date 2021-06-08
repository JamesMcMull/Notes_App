
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.className = "listItemContract"
  li.innerText = text
  li.addEventListener('click', listItemOnClick)
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";

});


const listItemOnClick = (e) => {
  //const style = e.classList.toggle("listItem")

  if (e.target.classList.contains("listItemContract")) {
    e.target.classList.remove("listItemContract")
    e.target.classList.add("listItemExpand")
  } else {
    e.target.classList.add("listItemContract")
    e.target.classList.remove("listItemExpand")
  }

}



// item.onClick( function ()) {
//   $("value")
//   localStorage.getItem('item')
//   input.value = input.value;
// }

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

