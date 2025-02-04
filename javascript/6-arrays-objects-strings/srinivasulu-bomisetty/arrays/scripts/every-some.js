function checkScores(students) {
    const allPassed = students.every(student => student.score > 35);
    
    const someFailed = students.some(student => student.score < 35);
    
    if (allPassed) {
        document.getElementById("message").innerText = "All Students Passed";
    } else if (someFailed) {
        document.getElementById("message").innerText = "Some Students Failed";
    }
    
    document.getElementById("studentScores").innerText = JSON.stringify(students, null, 2);
}

const students = [
    { name: 'Bob', score: 80 },
    { name: 'Alice', score: 90 }
];

checkScores(students);