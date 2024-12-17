function introduceUsers() {
    const userInput = document.getElementById("userInput").value;
    try {
        const users = JSON.parse(userInput);
        let resultText = "";
        users.forEach(user => {
            resultText += `${user.name} is ${user.age} years old.<br>`;
        });
        document.getElementById("result").innerHTML = resultText;
    } catch (error) {
        document.getElementById("result").innerHTML = "Please enter valid user data in the correct format.";
    }
}

