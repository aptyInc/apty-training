let form=document.getElementById("form")
let result=document.getElementById("result")
let obj={}

form.addEventListener("submit",(e)=>{
e.preventDefault()

let key=e.target[0].value
let value=e.target[1].value
obj[key]=value
result.innerText=`object is :  ${JSON.stringify(obj)}`

})


