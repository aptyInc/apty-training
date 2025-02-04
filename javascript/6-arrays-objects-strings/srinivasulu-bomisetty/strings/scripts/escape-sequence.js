let escape_sequence=() => {
	let text = document.getElementById("input").value;

	document.getElementById("result").textContent = text
		.replace(/\\n/g, "\\\\n")
		.replace(/\\t/g, "\\\\t");
}
