let removeItem = (event) => {
  var goingToDelete = false;

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

// var deleteItem = function deleteItem() {
//   var text = window.prompt();
//   if (text) removeItem(text)
// }
