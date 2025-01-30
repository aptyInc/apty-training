let result=document.getElementById("result")

function get_fact(){
    let value=document.getElementById("value").value
    let c=1;
    let fact=1
    while(c<=value){
        fact *=c;
        c++
    }
    result.innerText=`factorial of ${value} is ${fact}`
}