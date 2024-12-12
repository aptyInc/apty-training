
document.getElementById('form').onsubmit = evt => {
    evt.preventDefault();

    const inputStr = document.getElementById('input').value;

    try {
        const arrOfUsers = JSON.parse(inputStr);
        const allPass = arrOfUsers.every(eachScore => eachScore.score >= 35);
        if(allPass)
            document.getElementById('result').innerText = `All Students Passed`
        const someFails = arrOfUsers.some(eachScore => eachScore.score < 35);
        if(someFails)
            document.getElementById('result').innerText = `Some Students Failed`
    } catch (error) {
        console.log(error)
        document.getElementById('result').innerText = `Error: Invalid input. input shoulbe valid format. Eg: [{name: 'John', age: 30}, {name: 'Jane', age: 25}]`
    }
}