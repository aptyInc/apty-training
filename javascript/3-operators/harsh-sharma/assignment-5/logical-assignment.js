class LogicalAssignmentOperators {
    and_assign(value1, value2) {
        try{
            return value1 &&= value2; // &&=
        }
        catch(e){
            return `It will not convert because of this error: ${e.message}`
        }
    }

    or_assign(value1, value2) {
        return value1 ||= value2; // ||=
    }

    nullish_assign(value1, value2) {
        return value1 ??= value2; // ??=
    }
}

function convert_to_type(input, type) {
    switch(type) {
        case "symbol":
            return Symbol(input);
        case "number":
            return Number(input);
        case "string":
            return String(input);
        case "boolean":
            return (input === "false" || input === "0") ? false : true;
        case "bigInt":
            return BigInt(input);
        default:
            return;
    }
}

document.getElementById("and-assign").addEventListener("click", () => handleLogicalOperator("&&="));
document.getElementById("or-assign").addEventListener("click", () => handleLogicalOperator("||="));
document.getElementById("nullish-assign").addEventListener("click", () => handleLogicalOperator("??="));

function handleLogicalOperator(operator) {
    const input_1 = document.getElementById("input_1").value;
    const input_2 = document.getElementById("input_2").value;
    const type_1 = document.getElementById("type_1").value;
    const type_2 = document.getElementById("type_2").value;

    // Convert the values to the appropriate types
    const value1 = convert_to_type(input_1, type_1);
    const value2 = convert_to_type(input_2, type_2);

    const logicOperator = new LogicalAssignmentOperators();
    let finalResult = null;

    // Perform the logical assignment operation based on the selected operator
    switch (operator) {
        case "&&=":
            finalResult = logicOperator.and_assign(value1, value2);
            break;
        case "||=":
            finalResult = logicOperator.or_assign(value1, value2);
            break;
        case "??=":
            finalResult = logicOperator.nullish_assign(value1, value2);
            break;
        default:
            return;
    }

    // Output the result to the HTML page
    const resultContainer = document.querySelector(".final_results");
    resultContainer.textContent = `Result of ${String(value1)}${operator}${String(value2)}: ${String(finalResult)}`;
}
