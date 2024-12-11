function introduceUsers() {
    const input = document.getElementById('userInput').value.trim();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ""; 

    try {
        const users = JSON.parse(input);

        if (!Array.isArray(users) || !users.every(user => user.name && user.age)) {
            throw new Error("Invalid input! Ensure it's an array of objects with 'name' and 'age'.");
        }

        // Use forEach to create introductions
        users.forEach(user => {
            const message = `${user.name} is ${user.age} years old.`;
            const paragraph = document.createElement('p');
            paragraph.textContent = message;
            outputDiv.appendChild(paragraph);
        });
    } catch (error) {
        // Handle invalid JSON or input format
        outputDiv.textContent = `Error: ${error.message}`;
    }
}