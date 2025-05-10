

document.getElementById('form').onsubmit = evt => {
    evt.preventDefault();

    const inputStr = document.getElementById('input').value;

    try {
        const arrOfUsers = JSON.parse(inputStr);
        if (!Array.isArray(arrOfUsers)) throw new Error('It is invalid array input!')
        arrOfUsers.sort((user1, user2) => user2.score - user1.score);
        document.getElementById('result').innerText = `Cutsome sorting array is : ${JSON.stringify(arrOfUsers)}`;

    } catch (error) {
        document.getElementById('result').innerText = `Error: Invalid input. input shoulbe valid format. Eg: [{name: 'John', age: 30}, {name: 'Jane', age: 25}]`
    }
}