function oddEven(){
    let number = document.getElementById("number").value;

    if(number === ""){
        document.getElementById("result").textContent="Please enter a number to find odd/even";
        return;
    }
number = parseFloat(number);

let oddEven;
if (number%2==0){
    oddEven= "Given number is even number";
}
else{
    oddEven="Given number is odd number";
}
document.getElementById("result").textContent=`${oddEven}`;
}