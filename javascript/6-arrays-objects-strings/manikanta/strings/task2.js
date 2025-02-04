function pro(){
    let input = document.getElementById('v1').value;
    let res = document.getElementById('res');
    let result;

    // Check if the input is empty
    if (input === "") {
        result = null;
    } else {
        // Get the first and last characters of the string
        result = input.charAt(0) + " " + input.charAt(input.length - 1);
    }

    // Display the result
    res.innerHTML = result;
}