
document.getElementById("form").onsubmit = evt => {
    evt.preventDefault();

    let number = parseInt(document.getElementById("number").value);
    const codeBlock = document.getElementById("codeBlock");
    let result = document.getElementById("result");

    let res = '';

    for(let i = 2 ; i < number; i++) {
        let isPrime = true;
        for(let j = 2; j < parseInt(i/2) ; j++) {
            if(i % j === 0) {
                isPrime = false
                break;
            }
        }

        if(isPrime) 
            res += `${i} \t`
    }

    result.innerText = `Prime numbers : ${res}`;

}