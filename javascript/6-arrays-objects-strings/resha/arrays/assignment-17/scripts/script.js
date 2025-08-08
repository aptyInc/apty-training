const output = document.getElementById('output');
const show = document.getElementById('show');

show.addEventListener("click", () => {
    const array1 = document.getElementById('array1').value;
    const array2 = document.getElementById('array2').value;

    if (!array1 || !array2) {
        output.innerText = "Please enter both arrays";
        return;
    }

    const arr1 = array1.split(',').map(Number);
    const arr2 = array2.split(',').map(Number);

    const combined = arr1.concat(arr2);
    const res = [];

    for (const num of combined) {
        if (!res.includes(num)) {
            res.push(num);
        }
    }

    output.innerText = `Combined Array: ${res.join(',')}`;
});
