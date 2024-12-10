
function sortArray(arr) {
    return arr.sort((a, b) => a - b); 
}


function sortNumbers(event) {
    event.preventDefault(); 


    const input = document.getElementById('numbers').value;

 
    const numberArray = input.split(',').map(Number);

   
    const orderArray = sortArray(numberArray);

    
    for (let i = 0; i < orderArray.length; i++) {
        const row = `<tr><td>${orderArray[i]}</td></tr>`; // No index column
        resultTable.innerHTML += row;
    }
}
