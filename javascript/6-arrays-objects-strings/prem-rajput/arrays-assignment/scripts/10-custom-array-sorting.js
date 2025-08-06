function sortStudents() {
    let input = document.getElementById("studentsInput").value;
    let students = input.split(",").map((student) => {
        let [name, score] = student.split(":").map((item) => item.trim());
        return { name, score: parseInt(score) };
    });

    students.sort((a, b) => b.score - a.score);

    document.getElementById("sortedStudents").innerText =
        JSON.stringify(students);
}
