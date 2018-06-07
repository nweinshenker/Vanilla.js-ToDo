let deleteItem = (card) => {
  let cards = document.getElementsByTagName('div');
  for (var i = cards.length - 1; i >= 0; i--) {
    if (card.exists()) {
      document.innerHTML = 'X'
      document.innerText = 'delete'
    }
    else {
        continue;
    }
  }
}
