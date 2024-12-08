const sortArray = function () {
    const userInputElement = document.getElementById("userInput");


    const userArray = userInputElement.value.split(",");

    const newArray = userArray.map(element => parseInt(element));

    const sortedArray = newArray.sort();

    document.getElementById("result").textContent = sortedArray;
};


