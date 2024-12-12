

document.getElementById('form').onsubmit = evt => {
    evt.preventDefault();

    const inputStr = document.getElementById('input').value;

    const listContainer = document.createElement('ul');

    try {
        const arrOfUsers = JSON.parse(inputStr);
        const list = arrOfUsers.filter(eachTask => eachTask.completed).map(eachTask => eachTask.task);
        document.getElementById('result').innerText = `Completed Tasks : ${JSON.stringify(list)}`
    } catch (error) {
        document.getElementById('result').innerText = `Error: Invalid input. input shoulbe valid format. Eg: [{name: 'John', age: 30}, {name: 'Jane', age: 25}]`
    }
}