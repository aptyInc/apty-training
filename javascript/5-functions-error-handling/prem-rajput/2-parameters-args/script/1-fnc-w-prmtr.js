function calculateArea(event){

    event.preventDefault();

    const length = document.getElementById("length").value || 5;
    const width = document.getElementById("width").value || 10;

    const area = length * width;

    document.getElementById("result").innerText = `Area: ${area}`;

}
