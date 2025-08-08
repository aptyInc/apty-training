const output = document.getElementById('output');
const show = document.getElementById('show');

function swap(arr) {
    let [a, b] = arr;
    [a, b] = [b, a];
    return `Swapped Values -> a: ${a}, b: ${b}`;
}

show.addEventListener("click", () => {
    const values = document.getElementById('values').value;
    const arr = values.split(',').map(Number);

    if(arr.length > 2) {
        output.innerText = "Please enter only 2 values";
        return;
    }

    const res = swap(arr);
    output.innerText = `${res}`;
})

