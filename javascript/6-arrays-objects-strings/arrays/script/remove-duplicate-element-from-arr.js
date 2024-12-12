

document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const inputArr = document.getElementById('input').value;

    try {

        const arr = JSON.parse(inputArr);
        if (!Array.isArray(arr))
            throw new Error('Input should be an Array.');

        const uniqueArr = [];

        for (let i of arr) {
            if (!uniqueArr.includes(i))
                uniqueArr.push(i);
        }

        document.getElementById('result').innerText = `After Remove duplicate elements : ${JSON.stringify(uniqueArr.sort((a,b) => a - b))}`;
    } catch (error) {
        document.getElementById('result').innerText = `Error: Invalid input. input shoulbe valid format. Eg: [1,2,3,4,5,6]`
    }
})