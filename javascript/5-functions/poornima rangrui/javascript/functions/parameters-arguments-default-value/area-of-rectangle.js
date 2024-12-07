const areaCalculate = () => {
    let lengthElement = document.getElementById("length");
    let breadthElement = document.getElementById("breadth")

    
    function areaOfRectangle(length=3, breadth=3){

        return length * breadth

    }

    if(lengthElement.value === "" || breadthElement.value === ""){
        let reactangleArea = areaOfRectangle()
        document.getElementById("result").textContent = reactangleArea
    }else{
        let length =  parseInt(lengthElement.value) 
        let breadth = parseInt(breadthElement.value)
        let reactangleArea = areaOfRectangle(length, breadth)

        document.getElementById("result").textContent = reactangleArea

    }


    

}