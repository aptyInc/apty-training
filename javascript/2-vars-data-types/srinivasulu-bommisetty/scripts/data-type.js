let str="this is string"
document.write(`${str} : type is  ${ typeof(str)} <br>`)
let num=10;
document.write(`${num} : type is  ${ typeof(num)} <br>`)
let undefined_example;
document.write(`${undefined_example} : type is  ${ typeof(undefined_example)} <br>`)
let null_example=null;
document.write(`${null_example} : type is  ${ typeof(null_example)} <br>`)

 let bool=true
 document.write(`${bool} : type is  ${ typeof(bool)} <br>`)

 let symbol_exmaple=Symbol("hi123_")
 document.write(`symbol_exmaple : type is  ${ typeof(symbol_exmaple)} <br>`)


 let arr=[1,3,4,5,6]
 document.write(`[${arr}] : type is  ${ typeof(arr)} <br>`)
 let obj={
     name:"srinu",
     age:"23"
 }
 document.write(`${JSON.stringify(obj)} : type is  ${ typeof(obj)} <br>`)