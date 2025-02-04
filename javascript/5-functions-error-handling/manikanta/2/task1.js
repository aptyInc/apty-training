function calculateArea(event) {
    event.preventDefault(); 

    let length = document.getElementById('length').value || 0;  
    let width = document.getElementById('width').value || 0;   


    let area = computeArea(Number(length), Number(width));

 
    document.getElementById('result').innerHTML = `The area of the rectangle is: ${area}`;
}


function computeArea(length = 0, width = 0) {
    return length * width;
}