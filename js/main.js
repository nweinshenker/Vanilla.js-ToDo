// Double check this works to add getElementsByTagName
// TODO: Make sure this works
let addItem = (text) => {
  let item = document.createElement('div');
  let content = document.createElement('h2');
  let button = document.createElement('button');

  button.innerHTML = 'X';
  button.style.fontSize = '10px';
  button.className = 'itemButton';
  button.addEventListener('click',removeItem);

  content.innerHTML = text;
  item.appendChild(content);
  item.appendChild(button);
  item.className = 'todoItem';
  document.getElementById('todoContainer').appendChild(item);

  item.addEventListener('click', checkDelete);
}

let deleteItem = (card) => {
  let cards = document.getElementsByTagName('div');
  for (var i = cards.length - 1; i >= 0; i--) {
    if (card.onClick()) {
      card = 'delete'
    }
    else {

    }
  }
}

window.onload = function() {

  console.log('loading page');

  addItem("new stuff");

  item.createElement(additem());
}
