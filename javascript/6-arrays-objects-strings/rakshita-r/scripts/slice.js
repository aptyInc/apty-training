function Names() {
  const names = ["raksh", "prana", "pree", "ram", "aksj"];

  const firstThree = names.slice(0, 3);

  const lastTwo = names.slice(-2);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML =
    `<p><strong>First Three Names:</strong> ${firstThree.join(", ")}</p>` +
    `<p><strong>Last Two Names:</strong> ${lastTwo.join(", ")}</p>`;
}
