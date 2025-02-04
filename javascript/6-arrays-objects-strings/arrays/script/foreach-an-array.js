
document.getElementById('form').onsubmit = evt => {
    evt.preventDefault();

    const inputStr = document.getElementById('input').value;

    const listContainer = document.createElement('ul');

    try {
        const arrOfUsers = JSON.parse(inputStr);
        arrOfUsers.forEach(user => {
            userInfo = `${user.name} is ${user.age} years old.`;
            const li = document.createElement('li')
            li.innerText = userInfo;
            listContainer.appendChild(li);
        })
        document.getElementById('result').appendChild(listContainer);
        
    } catch (error) {
        console.log(error)
        document.getElementById('result').innerText = `Error: Invalid input. input shoulbe valid format. Eg: [{name: 'John', age: 30}, {name: 'Jane', age: 25}]`
    }
}