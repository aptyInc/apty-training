const higherOrderFilter = (array, callback) => callback(array);

const filterNumbers = () => {

    const numbersInput = document.getElementById("numbersInput").value;
    const limit = parseInt(document.getElementById("limitInput").value);

    if (!numbersInput || isNaN(limit)) {
        alert("Please enter valid numbers and a limit.");
        return;
    }

    const numbers = numbersInput.split(",").map(Number);

    const filtered = higherOrderFilter(numbers, (arr) => arr.filter((num) => num <= limit)
    );

    document.getElementById("result").textContent = filtered.join(", ");
    
};
