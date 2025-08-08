const output = document.getElementById('output');
const show = document.getElementById('show');

function chunkArray(arr, num) {
    let newArr = [], temp = [];
    for (let i of arr) {
        temp.push(i);        
        if (temp.length === num) {
            newArr.push(temp);
            temp = [];
        }
    }
    if(temp.length > 0) {
        newArr.push(temp);
    }
    return newArr;
}

show.addEventListener("click", () => {
    const array = document.getElementById('array').value;
    const arr = array.split(',').map(Number);
    const num = Number(document.getElementById('num').value);

    const res = chunkArray(arr, num);
    output.innerText = `Result: ${JSON.stringify(res)}`;

})