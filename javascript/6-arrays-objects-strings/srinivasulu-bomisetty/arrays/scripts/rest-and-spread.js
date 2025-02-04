let form =document.getElementById("form")
let result=document.getElementById("result")
form.addEventListener("submit",(e)=>{
e.preventDefault()
let arr1=e.target[0].value.split(",").map(Number)
let arr2=e.target[1].value.split(",").map(Number)
let fullArray= Array.from(new Set([...arr1,...arr2]))

result.innerText=JSON.stringify(fullArray)


})