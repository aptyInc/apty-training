function pro(){
    let input = document.getElementById('v1').value;
    let res = document.getElementById('res');
    let result;

    // Replace \n and \t with their respective escape sequences
    result = input.replace(/\n/g, '\\n').replace(/\t/g, '\\t');

    // Display the result
    res.innerHTML = result;
}