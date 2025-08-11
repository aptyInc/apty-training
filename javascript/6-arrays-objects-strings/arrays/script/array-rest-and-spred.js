
function combineArraysUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}


document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const inputStr1 = document.getElementById('arr1').value;
    const inputStr2 = document.getElementById('arr2').value;

    try {
        const arr1 = JSON.parse(inputStr1);
        const arr2 = JSON.parse(inputStr2);

        if (!Array.isArray(arr1) || !Array.isArray(arr2))
            throw new Error('Input should be an array.');

        const result = combineArraysUnique(arr1, arr2)
        document.getElementById('result').innerText = `After combine to arrays : ${JSON.stringify(result)}`;

    } catch (error) {
        document.getElementById('result').innerText = `Error: Invalid input. input shoulbe valid format. Eg: [1,2,3,4,5]`
    }
})