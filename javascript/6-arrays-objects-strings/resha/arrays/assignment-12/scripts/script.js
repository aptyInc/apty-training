const output = document.getElementById('output');
const show = document.getElementById('show');

show.addEventListener("click", () => {
    const array = document.getElementById('array').value;
    if (!array) {
        output.innerText = "Please enter array elements";
        return;
    }
    const arr = array.split(',').map(Number);
    arr.sort();

    let newArr = [];
    newArr.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            newArr.push(arr[i]);
        }
    }
    output.innerText = `${newArr}`;
})

