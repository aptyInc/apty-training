function checkScores() {
    let input = document.getElementById("scoresInput").value;
    let students = input.split(",").map((student) => {
        let [name, score] = student.split(":").map((item) => item.trim());
        return { name, score: parseInt(score) };
    });
    let allPassed = students.every((s) => s.score > 35);
    let someFailed = students.some((s) => s.score < 35);
    let result = allPassed
        ? "All Students Passed"
        : someFailed
        ? "Some Students Failed"
        : "Unknown";
    document.getElementById("result").innerText = result;
    document.getElementById("students").innerText = JSON.stringify(students);
}
