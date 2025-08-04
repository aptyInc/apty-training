const users = {
    "lucky": {
        address: {
            city: "Hyderabad"
        }
    }
};

function getValues() {
    const output = document.getElementById("output");
    const name = document.getElementById("name").value;

    let flag = false;
    try {
        const city = users[name].address.city;
        output.innerText = `City: ${city}`;
    } catch (error) {
        output.innerText = `Error: ${error.message}\n`;
        flag = true;
    }
    finally {
        if (flag) {
            const default_city = "Pune";
            output.innerText += `City: ${default_city}`;
        }

    }
}


