const incrementCounter=()=>{
    let ele=document.getElementById("counter")
    let num = parseInt(ele.innerText)
    num+=1;
     document.getElementById("counter").innerText = num
}