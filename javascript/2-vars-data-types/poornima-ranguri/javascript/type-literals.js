document.addEventListener('DOMContentLoaded', function() {
    // Get the container element
    const conversionContainer = document.getElementById("conversionContainer");

    // Define variables of different types
    const stringVariable = "Poornima G";
    const numberVariable = 333;
    const booleanValue = true;
    let undefinedValue;
    const nullVar = null;
    const symbolVar = Symbol('id');
    const objectVar = {name: "HP", RAM: "8 GB"};

    // Create template literals for each variable
    const templateLiterals = [
        `The string value is: ${stringVariable}`,
        `The number value is: ${numberVariable}`,
        `The boolean value is: ${booleanValue}`,
        `The undefined value is: ${undefinedValue}`,
        `The null value is: ${nullVar}`,
        `The symbol value is: ${symbolVar.toString()}`,
        `The object value is: ${JSON.stringify(objectVar)}`
    ];

    // Function to create and append paragraphs
    function createParagraph(text) {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        conversionContainer.appendChild(paragraph);
    }

    // Display each template literal
    templateLiterals.forEach(createParagraph);
});