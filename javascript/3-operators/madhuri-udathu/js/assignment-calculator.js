function getValues(){
    const value1 = Number(document.getElementById("value1").value);
    const value2 = Number(document.getElementById("value2").value);
    return{ value1 , value2 };
}
function printElement(result){
    const results =document.getElementById("result");
    results.textContent = result;
}
function equal(){
    const{ value1 }=getValues();
    let result=value1;
    printElement(result);
}
function addEquals(){
    const { value1 , value2 }= getValues();
    let result = value1;
    result += value2;
    printElement(result);
}
function subEquals(){
    const{ value1 , value2 }=getValues();
    let result=value1;
    result-=value2;
    printElement(result);
}
function mulEquals(){
    const{ value1 , value2 }=getValues();
    let result=value1;
    result*=value2;
    printElement(result);
}
function divEquals(){
    const{ value1 , value2 }=getValues();
    let result=value1;
    result/=value2;
    printElement(result);
}
function modEquals(){
    const{ value1 , value2 }=getValues();
    let result=value1;
    result%=value2;
    printElement(result);
}
function powEquals(){
    const{ value1 , value2 }=getValues();
    let result= value1;
    result**=value2;
    printElement(result);
}
function clears(){
    document.getElementById("value1").value=""
    document.getElementById("value2").value=""
    document.getElementById("result").innerText=""
}