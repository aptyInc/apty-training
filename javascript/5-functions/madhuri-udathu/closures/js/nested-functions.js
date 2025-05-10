function outer(name) {
    return function middle(age) {
        return function inner(city) {
            // Build a sentence using variables from all levels
            return `Hello, ${name}! I just knew about You. You are ${age} years old and live in ${city}.`;
        };
    };
}

function displayInfo() {
    const name = document.getElementById('name').value || "name";
    const age = document.getElementById('age').value || "unknown";
    const city = document.getElementById('city').value || "somewhere";
    const result = outer(name)(city)(age);

    document.getElementById('result').textContent = result;
}