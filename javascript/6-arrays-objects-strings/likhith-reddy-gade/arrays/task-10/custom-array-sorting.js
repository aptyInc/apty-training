function sortStudents() {
  const input = document.getElementById("students-input").value.trim();

  if (!input) {
    document.getElementById("custom-sort-result").innerText =
      "Please enter valid input.";
    return;
  }

  try {
    // Parse input
    const students = input.split(";").map((entry) => {
      const [name, score] = entry.split(",").map((item) => item.trim());
      return { name, score: parseFloat(score) };
    });

    // Validate parsed data
    if (students.some((student) => isNaN(student.score) || !student.name)) {
      throw new Error(
        "Invalid input format. Make sure to include a valid name and score."
      );
    }

    // Sort by score in descending order
    students.sort((a, b) => b.score - a.score);

    // Generate result
    const result = students.map((s) => `${s.name} (${s.score})`).join(", ");
    document.getElementById(
      "custom-sort-result"
    ).innerText = `Sorted Students: ${result}`;
  } catch (error) {
    document.getElementById(
      "custom-sort-result"
    ).innerText = `Error: ${error.message}`;
  }
}
