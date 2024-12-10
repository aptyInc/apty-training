
const users = {
    lucky: { address: { city: "Hyderabad" } },
    john: { address: { city: "Bangalore" } },
    jane: { address: { city: "Mumbai" } },
};


function getUserCity(userName) {
    try {
        const city = users[userName].address.city;
        return { success: true, city };
    } catch (error) {
        return { success: false, error: "User not found or invalid input." };
    }
}


document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = document.getElementById("input").value.trim().toLowerCase();

    const result = getUserCity(userName);

    const outputElement = document.getElementById("result");
    if (result.success) {
        outputElement.innerText = `City: ${result.city}`;
        outputElement.style.color = "green";
    } else {
        outputElement.innerText = result.error;
        outputElement.style.color = "red";
    }
});
