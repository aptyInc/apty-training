document.getElementById('updateButton').addEventListener('click', function() {

	const listItems = document.querySelectorAll('ul li');

	if (listItems[0]) listItems[0].textContent = 'updated list';
	if (listItems[4]) listItems[4].textContent = 'updated list 2';

});