/*
 Attempted to add an element
 Will finish another time
 */

function addItem(text) {
	return function () {
		var titleTextarea = list.titleFormNode
			.getElementsByClassName('trello-new-card-title-input')[0]
		list.titleFormNode.getElementsByClassName('trello-new-card-title-submit')[0]
			.onclick = titleSubmit
		list.titleFormNode.style.display = 'block';
		titleTextarea.focus();

		function titleSubmit(evt) {
			evt.preventDefault()
			var title = titleTextarea.value.trim()

	}
}
