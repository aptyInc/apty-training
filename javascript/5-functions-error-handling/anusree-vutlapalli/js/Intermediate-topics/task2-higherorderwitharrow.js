function filterNumbers() {
    let numbers = document.getElementById('numbers').value.split(',').map(Number);  
    let limit = document.getElementById('limit').value;  

    let filtered = numbers.filter(number => number <= limit);

    document.getElementById('result').textContent = filtered.join(', ');
}