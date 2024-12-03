document.addEventListener('DOMContentLoaded', function() {

    const conversionContainer = document.getElementById("conversionContainer");

    
    const stringVariable = "Poornima G";
    const numberVariable = 333;
    const booleanValue = true;
    let undefinedValue;
    const nullVar = null;
    const symbolVar = Symbol('id');
    const objectVar = {name: "HP", RAM: "8 GB"};

    
    const templateLiterals = [
        `The string value is: ${stringVariable}`,
        `The number value is: ${numberVariable}`,
        `The boolean value is: ${booleanValue}`,
        `The undefined value is: ${undefinedValue}`,
        `The null value is: ${nullVar}`,
        `The symbol value is: ${symbolVar.toString()}`,
        `The object value is: ${JSON.stringify(objectVar)}`
    ];


    function createParagraph(text) {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        conversionContainer.appendChild(paragraph);
    }

 
    templateLiterals.forEach(createParagraph);
});