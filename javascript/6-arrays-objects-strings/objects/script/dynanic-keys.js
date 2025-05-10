
const myObject = {};

function updateObject(key, value) {
    if(typeof key !== 'string')
        throw new Error("Key must be a string");

    myObject[key] = value;
    return myObject;
}

document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const key = document.getElementById('key').value.trim();
    const value = document.getElementById('value').value.trim();
    let result = '';
    try {
        result = updateObject(key,value)
    }catch(error) {
        result = error;
    }
    document.getElementById('result').innerText = `Result : ${JSON.stringify(result)}`

    document.getElementById('key').value = '';
    document.getElementById('value').value = '';

})