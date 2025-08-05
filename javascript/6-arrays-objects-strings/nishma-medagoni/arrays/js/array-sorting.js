function sortStudentsByScore() {
    const input = document.getElementById("studentInput").value
    let students

    try {
        students = JSON.parse(input)
    } catch (e) {
        document.getElementById("result").innerText = "Invalid JSON format. Please provide a valid array of student objects."
        return
    }

    if (!Array.isArray(students)) {
        document.getElementById("result").innerText = "Please provide an array of student objects."
        return
    }

    
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students.length - i - 1; j++) {
            if (students[j].score < students[j + 1].score) {
                let temp = students[j]
                students[j] = students[j + 1]
                students[j + 1] = temp
            }
        }
    }

    document.getElementById("result").innerHTML = JSON.stringify(students, null, 2);
}