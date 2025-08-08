const output = document.getElementById('output');
const btn = document.getElementById('btn');

function customFlatten(arr) {
    let newArr = [];
    function flatten(ele) {
        if(Array.isArray(ele)) {
            for(let i=0; i<ele.length; i++) {
                flatten(i);
            }
        }
        else {
            newArr.push(ele);
        }
    }
    flatten(arr);
    return newArr;
}

btn.addEventListener("click", () => {
    const array = document.getElementById('array').value;
    const arr = array.split(',').map(Number);

    const res = customFlatten(arr);
    output.innerText = `Flattened Array: ${res}`;
})
