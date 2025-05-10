function pro(){
    let input = document.getElementById('v1').value;
    let res = document.getElementById('res');
    let result;

    // Pad the input string with zeros to make the total length 10
    result = input.padStart(10, '0');

    // Display the result
    res.innerHTML = result;
}