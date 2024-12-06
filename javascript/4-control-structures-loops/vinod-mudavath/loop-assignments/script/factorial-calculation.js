

document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    let number = parseInt(document.getElementById("number").value);
    const codeBlock = document.getElementById("codeBlock");
    let result = document.getElementById("result");

    const temp = number;
    let fact = 1;
    do {
        fact *= number; 
        number--;
    } while (number > 0)

    const codeSnippet = `
        // I store the number variable value into temp variable below for reference
        const temp = number; // number = 5

        // I define the fact variable to store the factorial value
        let fact = 1;

        //below define the do while loop first it's execute and then check condition

        do {
            // below fact is multiply with number and store in it's self then number decrement bewlow
            fact *= number;  // 1.fact = 5, 2. fact = 5 * 4 = 20 , 3.fact = 20 * 3 = 60 , 4.fact = 60 * 2 = 120 , 5 = fact = 120 * 1 = 120
            number--; // 4 3 2 1
        } while (number > 0); //1.true 2.true 3.true 4.true 5.false
    `
    codeBlock.innerText = codeSnippet;
    result.innerText = `The factorial of ${temp} is ${fact}`;

}