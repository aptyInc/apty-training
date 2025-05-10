function operator(operator){
    value1=Number(document.getElementById("value1").value);
    value2=Number(document.getElementById("value2").value);
    switch(operator){
        case "+":display(value1+value2);break;
        case "-":display(value1-value2);break;
        case "*":display(value1*value2);break;
        case "/":display(value1/value2);break;
        case "%":display(value1%value2);break;
        case "**":display(value1**value2);break;
    }
}
function display(message){
    result=document.getElementById("result");
    result.innerText= message;
}