function sortStudents() {
  const input = document.getElementById("students").value;
  const result = document.getElementById("result");

  try {
    const data = JSON.parse(input);
    if (!Array.isArray(data)) throw new Error();

    const sorted = data.sort((a, b) => b.score - a.score);

    result.innerText = JSON.stringify(sorted);
  } catch {
    result.innerText = "Invalid input. Please follow the correct format.";
  }
}
