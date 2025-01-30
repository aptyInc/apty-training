let result=document.getElementById("result")

function get_sum(){
    let value=document.getElementById("value").value
    let c=1
    let sum=0
    while(c<=value){
        sum += c;
        c++
    }

    result.innerText=`sum of ${value} range is ${sum}`
}
