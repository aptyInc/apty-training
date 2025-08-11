

function calculateAreaOfRectangle(length = 10, width = 5) {

    return length * width;

}

document.getElementById('form').onsubmit = evt => {
    evt.preventDefault();
    const inputLength = document.getElementById('length').value;
    const inputWidth = document.getElementById('width').value;

    const length = inputLength ? parseFloat(inputLength) : undefined; 
    const width = inputWidth ? parseFloat(inputWidth) : undefined; 

    if((length !== undefined && isNaN(length)) || (width !== undefined && isNaN(width))){
        document.getElementById('result').innerText = 'Please Enter valid numeric value.';
        return;
    }

    const areaOfRectangle = calculateAreaOfRectangle(length, width);
    document.getElementById('result').innerText = `Area of rectangle is : ${areaOfRectangle}`;
}