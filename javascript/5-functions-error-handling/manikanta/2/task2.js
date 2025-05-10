function sum() {
            
    let inp = document.getElementById('in').value.split(',').map(i => Number(i.trim()));

    
    let result = calculateSum(...inp);

    
    document.getElementById('res').innerHTML = `The sum is: ${result}`;
}


function calculateSum(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}