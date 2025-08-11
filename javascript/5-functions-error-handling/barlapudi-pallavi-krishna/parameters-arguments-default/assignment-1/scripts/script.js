function cal(length=10,breadth=10){
    return length*breadth;
}

document.getElementById("areaForm").addEventListener("submit",function(event){
    event.preventDefault();
    let num1=document.getElementById("length").value;
    let num2=document.getElementById("breadth").value;

    let number1 = num1 ? parseFloat(num1) : undefined;
    let number2 = num2 ? parseFloat(num2) : undefined;

    const res=cal(number1,number2);

    document.getElementById("results").innerText=`The area of rectangle whose length(${number1}) and breadth(${number2}) is ${res}(the default values are (l=10 and b=10))`;
});