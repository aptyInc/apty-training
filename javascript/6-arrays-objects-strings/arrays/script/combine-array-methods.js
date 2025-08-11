


document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const inputStr = document.getElementById('input').value;

    try {
        const arr = JSON.parse(inputStr);

        if (!Array.isArray(arr))
            throw new Error('Input should be an array.');

        const result = arr.filter(eachNumber => eachNumber % 2 === 0).map(eachNumber => 2 * eachNumber).reduce((prev, curr) => prev + curr);

        document.getElementById('result').innerText = `result : ${result}`;

    } catch (error) {
        document.getElementById('result').innerText = `Error: Invalid input. input shoulbe valid format. Eg: [1,2,3,4,5]`
    }
})