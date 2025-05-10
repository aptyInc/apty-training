function calculateNumbers() {
    const number = parseInt(document.getElementById('number').value);
    const display_table = document.getElementById("result");

    if(!number){
        return;
    }
    display_table.innerHTML  = "";
    let iteration = 1;
    let results = 0;   
    while(iteration <= number ){
        results += iteration;
        iteration++;
    }

    display_table.innerHTML = `Here is the sum of 1 to ${number}: <strong>${results}</strong>`
}