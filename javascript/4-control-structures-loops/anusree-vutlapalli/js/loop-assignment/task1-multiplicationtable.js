function multiplicationTable() {
    const num = parseInt(document.getElementById("number").value); // Get the input number
    const result = document.getElementById("result"); // Get the result container

    // Clear previous results
    result.innerHTML = "";
    if (isNaN(num)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        let ans = i * num;
        const row = document.createElement("p"); // Create a new paragraph for each row
        row.innerText = `${num} x ${i} = ${ans}`; // Set the text content
        result.appendChild(row); // Append the row to the result container
    }
}
