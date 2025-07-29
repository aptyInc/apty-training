const output = document.getElementById('output');

function generate() {
    const n = document.getElementById('n').value;
    const arr = n.split(',');
    // console.log(arr);
    
    
    let sum = 0;
    for(let num of arr) {
        sum += Number(num);        
    }

    output.innerText = `Sum: ${sum} and Average: ${sum/arr.length}`;
}