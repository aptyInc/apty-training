const body = document.body;

window.addEventListener("resize", (event) => {
	let width = event.target.innerWidth;
	let height = event.target.innerHeight;

	const existingP = document.querySelector("p");
	if (existingP) {
		existingP.remove();
	}

	let p = document.createElement("p");
	p.innerHTML = `${width} X ${height} <br />`;

	body.appendChild(p);
});
