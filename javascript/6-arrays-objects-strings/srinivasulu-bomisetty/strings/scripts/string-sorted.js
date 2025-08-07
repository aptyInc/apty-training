let input=document.getElementById("input")

let btn=document.getElementById("btn")

let result=document.getElementById("result")

btn.addEventListener("click" ,()=>{
    let str =input.value.split("").sort().join("")
    result.innerText=` sorted string is : ${str}`
})