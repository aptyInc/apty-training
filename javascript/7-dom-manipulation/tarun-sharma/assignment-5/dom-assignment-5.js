document.getElementById('countAll').addEventListener('click', function() {

	const firstElements = document.body.children; 

	const output = document.getElementById('output');
	output.innerHTML = '';

	for (let Parent of firstElements) {

		const nestedCount = Parent.getElementsByTagName('*').length; 
		const listAll = document.createElement('li'); 

		listAll.textContent = `${Parent.tagName.toLowerCase()}: ${nestedCount}`; 
		output.appendChild(listAll);
	}

});