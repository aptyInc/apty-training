document.addEventListener('DOMContentLoaded', function () {
    let conversionContainer = document.getElementById("conversionContainer");

    if (!conversionContainer) {
        console.error("Conversion container not found!");
        return;
    }

    let stringVariable = "Poornima G";
    let numberVariable = 333;
    let booleanValue = true;
    let undefinedValue;
    let nullVar = null;
    let symbolVar = Symbol('id');
    let objectVar = { name: "HP", RAM: "8 GB" };

    function createParagraph(text) {
        try {
            let paragraph = document.createElement("p");
            paragraph.textContent = text;
            conversionContainer.appendChild(paragraph);
        } catch (error) {
            console.error("Error creating paragraph:", error);
        }
    }

    try {
        createParagraph("String to Number: " + Number(stringVariable));
        createParagraph("String to Boolean: " + Boolean(stringVariable));
        createParagraph("String to Object: " + Object(stringVariable));
    } catch (error) {
        console.error(error.message);
    }

    try {
        createParagraph("Number to String: " + String(numberVariable));
        createParagraph("Number to Boolean: " + Boolean(numberVariable));
        createParagraph("Number to Object: " + Object(numberVariable));
    } catch (error) {
        console.error(error.message);
    }

    try {
        createParagraph("Boolean to String: " + String(booleanValue));
        createParagraph("Boolean to Number: " + Number(booleanValue));
        createParagraph("Boolean to Object: " + Object(booleanValue));
    } catch (error) {
        console.error(error.message);
    }

    try {
        createParagraph("Undefined to String: " + String(undefinedValue));
        createParagraph("Undefined to Number: " + Number(undefinedValue));
        createParagraph("Undefined to Boolean: " + Boolean(undefinedValue));
        createParagraph("Undefined to Object: Cannot convert undefined to Object");
    } catch (error) {
        console.error(error.message);
    }

    try {
        createParagraph("Null to String: " + String(nullVar));
        createParagraph("Null to Number: " + Number(nullVar));
        createParagraph("Null to Boolean: " + Boolean(nullVar));
        createParagraph("Null to Object: Cannot convert null to Object");
    } catch (error) {
        console.error(error.message);
    }

    try {
        createParagraph("Symbol to String: " + String(symbolVar));
        createParagraph("Symbol to Boolean: " + Boolean(symbolVar));
        createParagraph("Symbol to Number: Error - Cannot convert Symbol to Number");
        createParagraph("Symbol to Object: " + Object(symbolVar));
    } catch (error) {
        console.error(error.message);
    }

    try {
        createParagraph("Object to String: " + String(objectVar));
        createParagraph("Object to Number: " + Number(objectVar));
        createParagraph("Object to Boolean: " + Boolean(objectVar));
        createParagraph("Object to Object: " + Object(objectVar));
    } catch (error) {
        console.error(error.message);
    }
});
