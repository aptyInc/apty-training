let form=document.getElementById("form")
let result=document.getElementById("result")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    result.innerText=wish(e.target[0].value,e.target[1].value)
})

function wish(name,age){
return `Hello, my name is ${name} and I am ${age} years old.`
}