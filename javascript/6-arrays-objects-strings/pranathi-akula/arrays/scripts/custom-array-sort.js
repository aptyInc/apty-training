function customSort(array, property) {
  return array.sort((a, b) => b[property] - a[property]);
}

function sortStudents() {
  const input = document.getElementById("inputArray").value;
  const students = input.split(";").map((student) => {
    const [name, score] = student.split(",").map((s) => s.trim());
    return { name: name, score: parseInt(score) };
  });

  const sortedStudents = customSort(students, "score");

  const result = sortedStudents
    .map((student) => `${student.name}: ${student.score}`)
    .join(", ");

  document.getElementById("sorted").textContent = result;
}
