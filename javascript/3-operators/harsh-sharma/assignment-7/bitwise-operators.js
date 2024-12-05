class BitwiseOperators {
    and(value1, value2) {
        return value1 & value2; // Bitwise AND (&)
    }

    or(value1, value2) {
        return value1 | value2; // Bitwise OR (|)
    }

    xor(value1, value2) {
        return value1 ^ value2; // Bitwise XOR (^)
    }

    not(value1) {
        return ~value1; // Bitwise NOT (~)
    }

    left_shift(value1, value2) {
        return value1 << value2; // Left Shift (<<)
    }

    right_shift(value1, value2) {
        return value1 >> value2; // Right Shift (>>)
    }
}

// Declare global variables
let value1, value2, result;
const bitwise = new BitwiseOperators();

// Function to get input values globally
function getInputValues() {
    value1 = parseInt(document.getElementById("value_1").value);
    value2 = parseInt(document.getElementById("value_2").value);
}

// Function to display the result in the final_results section
function displayResult(operation, result) {
    document.querySelector(".final_results").textContent = `Result of ${operation}: ${result}`;
}


document.getElementById("and_operator").addEventListener("click", () => {
    getInputValues(); 
    result = bitwise.and(value1, value2);
    displayResult("AND (&)", result);
});

document.getElementById("or_operator").addEventListener("click", () => {
    getInputValues(); 
    result = bitwise.or(value1, value2);
    displayResult("OR (|)", result);
});

document.getElementById("xor_operator").addEventListener("click", () => {
    getInputValues(); 
    result = bitwise.xor(value1, value2);
    displayResult("XOR (^)", result);
});

document.getElementById("not_operator").addEventListener("click", () => {
    getInputValues(); 
    result = bitwise.not(value1);
    displayResult("NOT (~)", result);
});

document.getElementById("left_shift_operator").addEventListener("click", () => {
    getInputValues(); 
    result = bitwise.left_shift(value1, value2);
    displayResult("Left Shift (<<)", result);
});

document.getElementById("right_shift_operator").addEventListener("click", () => {
    getInputValues(); 
    result = bitwise.right_shift(value1, value2);
    displayResult("Right Shift (>>)", result);
});
