function addCard(text) {
	return function () {
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
}
