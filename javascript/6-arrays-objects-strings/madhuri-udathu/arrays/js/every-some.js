function checkScores() {
    const input = document.getElementById('scoreInput').value.trim();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h3>Scores<\h3>";

    try {
        
        const scores = JSON.parse(input);

        if (!Array.isArray(scores) || !scores.every(student => student.name && typeof student.score === 'number')) {
            throw new Error("Invalid input! Ensure it's an array of objects with 'name' and 'score'.");
        }

        // Check if all students passed
        const allPassed = scores.every(student => student.score > 35);

        // Check if some students failed
        const someFailed = scores.some(student => student.score <= 35);

        if (allPassed) {
            outputDiv.textContent = "All Students Passed.";
        } else if (someFailed) {
            outputDiv.textContent = "Some Students Failed.";
        }

        scores.forEach(student => {
            const paragraph = document.createElement('p');
            paragraph.textContent = `${student.name}: ${student.score}`;
            outputDiv.appendChild(paragraph);
        });
    } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
}