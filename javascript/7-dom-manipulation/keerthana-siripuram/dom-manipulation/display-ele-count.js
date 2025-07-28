function countElements()
{
    const elementTypes=["div","p","h1"]
    let output=""
    elementTypes.forEach((elementType)=>{
        const count=document.getElementsByTagName(elementType).length
        output+=`${elementType}:${count}<br>`
    })
    document.getElementById("output").innerHTML=output
}