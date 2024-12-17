function countElements() {
            
            
	let divCount = document.querySelectorAll('div').length;
	let pCount = document.querySelectorAll('p').length;
	let spanCount = document.querySelectorAll('span').length;
	let iframeCount = document.querySelectorAll('iframe').length;

	
	let result = `
		<li>div's: ${divCount}</li>
		<li>p tags: ${pCount}</li>
		<li>span's: ${spanCount}</li>
		<li>Iframe: ${iframeCount}</li>
	`;
	
	
	document.getElementById('result').innerHTML = result;
}
