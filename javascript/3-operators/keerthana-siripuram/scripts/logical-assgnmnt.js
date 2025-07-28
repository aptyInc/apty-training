function fetchInput() {
    let firstVal = document.getElementById("val1").value
    let secVal = document.getElementById("val2").value
    let type1 = document.getElementById("type1").value
    let type2 = document.getElementById("type2").value
    let inputArr = [firstVal, secVal, type1, type2]
    return inputArr
}
function convertValue(val,type)
{
    switch(type){
        case "Number":return Number(val)
        case "Boolean":return Boolean(val)
        case "Symbol":return Symbol(val)
        case "Object":return Object(val)
        default:return val
    }
}
function logicalAssignmentAnd()
{
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1=convertValue(firstVal,type1)
    let convertedValue2=convertValue(secVal,type2)
    convertedValue1= convertedValue1 &&= convertedValue2
    document.getElementById("res").innerText=`Result:${convertedValue1}`
}
function logicalAssignmentOr()
{
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1=convertValue(firstVal,type1)
    let convertedValue2=convertValue(secVal,type2)
    convertedValue1= convertedValue1 ||= convertedValue2
    document.getElementById("res").innerText=`Result:${convertedValue1}`
}
function Nullish()
{
    const [firstVal, secVal, type1, type2] = fetchInput()
    let convertedValue1=convertValue(firstVal,type1)
    let convertedValue2=convertValue(secVal,type2)
    convertedValue1= convertedValue1 ??= convertedValue2
    document.getElementById("res").innerText=`Result:${convertedValue1}`
}

