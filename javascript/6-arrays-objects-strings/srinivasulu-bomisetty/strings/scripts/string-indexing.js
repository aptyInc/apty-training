let form=document.getElementById("form")
let result=document.getElementById("result")


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let str=e.target[0].value
    if(str.length == 0){
        result.innerText=`null`
    }else{
    result.innerText=`first and last letters : ${str.slice(0,1)}  ${str.slice(-1)}`

    }
    
})