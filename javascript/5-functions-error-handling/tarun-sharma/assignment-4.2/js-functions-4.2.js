function filterArray(arr, callback) {
    return arr.filter(callback); 
}


function filterNumbers() {
    
    let numbersInput = document.getElementById("numbers").value;

    let limit = parseFloat(document.getElementById("limit").value);

    
    let numbers = numbersInput.split(",").map(num => parseFloat(num.trim()));

    
    if (numbers.some(isNaN) || isNaN(limit)) {
        
        document.getElementById("result").innerText = "Please enter valid numbers and limit.";
        return;
    }

    
    let filtered = filterArray(numbers, num => num <= limit);

    
    document.getElementById("result").innerText = filtered.length > 0 ? filtered.join(", ") : "No numbers match the criteria.";
}