

let result=document.getElementById("result")
let arr=[{name: 'John', age: 30}, {name: 'Jane', age: 25}]
function sentence(arr){

arr.forEach(ele => {
    
    let para=document.createElement("p")
    para.innerText=`${ele["name"]} is ${ele["age"]} years old.`
    result.appendChild(para)

});

}


sentence(arr)