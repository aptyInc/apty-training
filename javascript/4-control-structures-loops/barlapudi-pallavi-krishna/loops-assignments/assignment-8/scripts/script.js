function generate() {
    const num=parseInt(document.getElementById("num").value);
    if(num===""||isNaN(num)){
        document.getElementById("results").innerText=`Please enter a number!`;
        return
    }else{
        let result=0;
        let i=1;
        while(i<=num){
            result+=i;
            i++;
        }
        document.getElementById("results").innerText=`The sum of numbers from 1 - ${num} = ${result}`;
    }

}
