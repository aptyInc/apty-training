function sumOfNum(){
    const num = parseInt(document.getElementById("number").value);
    const result = document.getElementById("result");

    let sum=0;
    let i=1;

    while(i<=num){
        sum += i;
        i++;
    }
    result.innerText=`The sum of numbers from 1 to ${num} = ${sum}`;
}