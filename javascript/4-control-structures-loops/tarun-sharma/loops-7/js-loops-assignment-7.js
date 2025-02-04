function pyramid() {
    
    let number = document.getElementById("number").value;
    let a = document.getElementById("result");

    number = parseInt(number);
    for (let i = 1; i <= number; i++) {
        
        let spaces = ' '.repeat(number - i);

        let star = '*'.repeat(2 * i - 1);

        a.textContent += spaces + star + '\n';

    }

}