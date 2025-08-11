

document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const inputStr = document.getElementById('input').value;
    const chunk = parseFloat(document.getElementById('chunks').value);

    const chunks = [];

    try {
        const arr = JSON.parse(inputStr);

        if (!Array.isArray(arr))
            throw new Error('Input should be an array.');

        for (let i = 0; i < arr.length; i += chunk) {
            chunks.push(arr.slice(i, i + chunk));
        }

        document.getElementById('result').innerText = `After array chunks : ${JSON.stringify(chunks)}`;

    } catch (error) {
        document.getElementById('result').innerText = `Error: Invalid input. input shoulbe valid format. Eg: [1,2,3,4,5]`
    }
})