let str="this is string"
let num=10;
let undefined_example;
let null_example=null;
 let bool=true
 let arr=[1,3,4,5,6]
 let obj={
     name:"srinu",
     age:"23"
 }
 // String
 document.write(`String : <b>'${str}'</b> conversion <br>`)
 document.write(`To Number : ${Number(str)} <br>` )
 document.write(`To Boolean : ${Boolean(str)} <br>` )
 document.write(`To String : ${String(str)} <br><br>` )

 // number

 document.write(`Number :'<b>${num}</b>' conversion <br>`)
 document.write(`To Number : ${Number(num)} <br>` )
 document.write(`To Boolean : ${Boolean(num)} <br>` )
 document.write(`To String : ${String(num)} <br><br>` )



 // undefined

 document.write(`Undefined :'<b>${undefined_example}</b>' conversion <br>`)
 document.write(`To Number : ${Number(undefined_example)} <br>` )
 document.write(`To Boolean : ${Boolean(undefined_example)} <br>` )
 document.write(`To String : ${String(undefined_example)} <br> <br>` )


 // null

 document.write(`Null :'<b>${null_example}</b>' conversion <br>`)
 document.write(`To Number : ${Number(null_example)} <br>` )
 document.write(`To Boolean : ${Boolean(null_example)} <br>` )
 document.write(`To String : ${String(null_example)} <br> <br>` )

 // bool
 document.write(`Boolean :'<b>${bool}</b>' conversion <br>`)
 document.write(`To Number : ${Number(bool)} <br>` )
 document.write(`To Boolean : ${Boolean(bool)} <br>` )
 document.write(`To String : ${String(bool)} <br><br>` )

//    Array
 document.write(`Array :<b>[${arr}]</b> conversion <br>`)
 document.write(`To Number : ${Number(arr)} <br>` )
 document.write(`To Boolean : ${Boolean(arr)} <br>` )
 document.write(`To String : ${String(arr)} <br> <br>` )

 // object

 document.write(`object :<b>'${JSON.stringify(obj)}'</b> conversion <br>`)
 document.write(`To Number : ${Number(obj)} <br>` )
 document.write(`To Boolean : ${Boolean(obj)} <br>` )
 document.write(`To String : ${String(obj)} <br> <br>` )
