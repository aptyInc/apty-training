const users = {
    lucky: { address: { city: "Hyderabad" } },
    john: { address: { city: "Bangalore" } },
    jane: { address: { city: "Mumbai" } },
};

const default_city = "Pune"; 

function getUserCity(userName) {
    let city;
    let error = null;

    try {
        city = users[userName].address.city;
    } catch (err) {
        error = "User not found or invalid input.";
    } finally {
        if (!city) {
            city = default_city;
        }
    }

    return { success: !error, city, error };
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
        outputElement.innerText = `Error: ${result.error}\nDefault City: ${result.city}`;
        outputElement.style.color = "orange";
    }
});
