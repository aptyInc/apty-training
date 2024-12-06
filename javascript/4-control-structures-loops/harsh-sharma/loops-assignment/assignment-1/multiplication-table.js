function generateTable() {
    const number = parseInt(document.getElementById('number').value);
    const display_table = document.getElementById("result");

    if(!number){
        return;
    }
    display_table.innerHTML = `<tr><th>Value 1 * Value 2</th><th>Final Result</th></tr>`
    for(let  i = 1; i<=10; i++){
        display_table.innerHTML += `<tr><th>${number} * ${i}</th> <th>${number * i}</th></tr>`
    }
}