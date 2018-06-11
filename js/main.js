'use strict';
var createCard = function createItem(text, priority) {
  var item = document.createElement('div');
  var content = document.createElement('h2');
  var button = document.createElement('button');

  content.innerHTML = text;
  item.appendChild(content);
  item.appendChild(button);
  item.className = 'todoItem';
  document.getElementsByClassName('main')[0].appendChild(item);

};

var addItem = function addItem() {
  var text = window.prompt();
  if (text) createCard(text);
};

var deleteItem = (event) => {
  var goingToDelete = false;

  var itemContainer.removeChild()
  let cards = document.getElementsByClassName('todoItem');

  for (var i = cards.length - 1; i >= 0; i--) {
    if (goingToDelete == false) {
      for (var i = 0; i < cards.length; i++ )
        todoItems[i].className = 'todoItem inDeleteMode';
      }
    }
    else {
      for (var i = cards.length - 1; i >= 0; i--) {
        goingToDelete = true;
        cards[i].remove();
        document.activeElement.blur();
      }
    }
  }
}

window.onload = function () {

  createItem('First item');

};
