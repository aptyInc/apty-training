
document.querySelectorAll('.btn').forEach(eachBtn => {
    let displayResult = document.getElementById('result');

    const inputStr = document.getElementById('input').value;

    try {

        const arr = JSON.parse(inputStr);

        eachBtn.addEventListener('click', evt => {
            switch (evt.target.id) {
                case 'replace-blue-with-purple': {
                    arr.splice(1, 1, 'Purple');
                    displayResult.innerText = `After replace "Blue" with "Purple" in a array is : ${JSON.stringify(arr)}`;
                } break;
                case 'add-orange-after-yellow': {
                    arr.splice(arr.length, 0, 'Orange');
                    displayResult.innerText = `After add "Orange" after "Yellow" in a array is : ${JSON.stringify(arr)}`;

                } break;
                case 'remove-green': {
                    arr.splice(2, 1);
                    displayResult.innerText = `After remove "Green"  in a array is : ${JSON.stringify(arr)}`;

                }break;
                default: displayResult.innerText = 'No event available here...'
            }
        })

    } catch (error) {
        displayResult.innerText = `Error: Invalid input. Please enter a valid JSON array. Example: ["Red", "Blue", "Green", "Yellow"]`;
    }

})
