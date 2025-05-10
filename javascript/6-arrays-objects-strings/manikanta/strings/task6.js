function pro(){
    let input = document.getElementById('v1').value;
    let res = document.getElementById('res');
    let result;

    // Convert the string into an array of Unicode values
    result = Array.from(input).map(char => char.charCodeAt(0));

    // Display the result
    res.innerHTML = JSON.stringify(result); // Convert array to string for display
}