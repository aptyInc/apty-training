document.getElementById("largest-id").addEventListener("submit", (event)=>{
    event.preventDefault();

    const display_result = document.getElementById("largest-display")

    const arr_numbers = []
    document.querySelectorAll("#number_value").forEach((key) =>{
        arr_numbers.push(Number(key.value))
    });

    let largest_number = Number.MIN_SAFE_INTEGER;
    arr_numbers.forEach((value) => {
       largest_number =  largest_number < value ? value : largest_number;
    })

    display_result.innerHTML = `The largest number is: ${largest_number}`;
    
})