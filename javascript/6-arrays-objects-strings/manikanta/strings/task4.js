function pro(){
    let input = document.getElementById('v1').value;
    let res = document.getElementById('res');
    let result;

    // Sort the characters in the string in alphabetical order
    result = input.split('')  // Convert string to array of characters
                  .sort()    // Sort the array in alphabetical order
                  .join(''); // Join the array back into a string

    // Display the result
    res.innerHTML = result;
}