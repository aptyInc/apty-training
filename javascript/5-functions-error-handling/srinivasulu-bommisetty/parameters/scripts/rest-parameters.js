

let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
let input_array=document.getElementById("input").value.split(",")

sum(...input_array)
})




function sum(...c){
let result_sum=0
for(i of c){
    result_sum+=Number(i)
}
result.innerText=`The sum of values is : ${result_sum}`

}