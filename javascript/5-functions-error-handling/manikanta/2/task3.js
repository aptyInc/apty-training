function parimeter(length = 0, width = 0) {
          
    function ara() {
        return length * width;
    }

    
    let perimeter = 2 * (length + width);

    
    let area = ara();
    document.getElementById('res').innerHTML = `Perimeter: ${perimeter} <br>Area: ${area}`;
}


function ap() {
   
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;

   
    length = length ? Number(length) : 0;
    width = width ? Number(width) : 0;

    // Call the parimeter function
    parimeter(length, width);
}