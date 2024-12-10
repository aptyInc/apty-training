
function calculatePerimeterOfRectangle(length = 10,  width = 5) {

    function calculateAreaOfRectangle() {

        return length * width;
    }

    return {perimeter:2 * (length + width) , area:calculateAreaOfRectangle()};
} 


document.getElementById('form').onsubmit = evt => {
    evt.preventDefault();

    const inputLength = document.getElementById('length').value;
    const inputWidth  = document.getElementById('width').value;
    
    const length = inputLength ? parseFloat(inputLength) : undefined;
    const width = inputWidth ? parseFloat(inputWidth) : undefined;

    if((length !== undefined && isNaN(length)) || (width !== undefined && isNaN(width))) {
        document.getElementById('result').innerText = `Please enter a valid inputs.`;
        return;
    }

    let {perimeter,area} = calculatePerimeterOfRectangle(length, width);
    console.log(result)

    document.getElementById('result').innerText = `Perimter of rectangle is : ${perimeter},
    Area of rectangle is : ${area}`;

}