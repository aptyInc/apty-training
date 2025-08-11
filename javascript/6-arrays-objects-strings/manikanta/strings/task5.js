function pro() {
    let name = document.getElementById('v1').value;
    let age = document.getElementById('v2').value;
    let res = document.getElementById('res');

    
    let result = `Hello, my name is ${name} and I am ${age} years old.`;

    
    res.innerHTML = result;
}