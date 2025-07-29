function generate(){
    const num1=parseInt(document.getElementById("number1").value);
    const num2=parseInt(document.getElementById("number2").value);
    let count=0;

    document.getElementById("results").innerHTML ="";

    if (isNaN(num1) || isNaN(num2) || num1 > num2) {
        document.getElementById("results").innerHTML = "Please enter a valid range.";
        return;
      }

    for (let i=num1;i<=num2;i++){
        if (i < 2) {
          document.getElementById("results").innerHTML += `The number ${i} is not a prime number<br>`;
          continue;
        }
        let isPrime=true;
        for(let j=2;j<i;j++){
            if(i%j===0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            document.getElementById("results").innerHTML+=`The number ${i} in the range ${num1} - ${num2} is a prime number<br>`;
        }else{
            document.getElementById("results").innerHTML+=`The number ${i} in the range ${num1} - ${num2} is not a prime number<br>`;
        }
    }
}