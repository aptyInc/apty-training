class ComparisonOperators {
    double_equals(value1 , value2){
        return value1 == value2;
    }

    triple_equals(value1, value2){
        return value1 === value2;
    }

    not_equals(value1, value2){
        return value1 != value2;
    }

    double_not_equals(value1, value2){
        return value1 !== value2;
    }

    greater(value1, value2){
        return value1 > value2;
    }

    less_than(value1, value2){
        return value1 < value2;
    }

    greater_equals(value1, value2){
        return value1 >= value2;
    }

    less_equals(value1, value2){
        return value1 <= value2;
    }
}


function convert_to_type(input, type){
    switch(type){
        case "symbol":
            return Symbol(input);
        case "number":
            return Number(input);
        case "string":
            return String(input);
        case "boolean":
            return (input == "false" || input == "0") ?  false :  true;
        case "bigInt":
            return BigInt(input);
        default:
            return;
    }
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // This will prevent the default form submission

    const input_1 = document.getElementById("input_1").value;
    const input_2 = document.getElementById("input_2").value;
    const type_1 = document.getElementById("type_1").value;
    const type_2 =  document.getElementById("type_2").value;

    //Converting the value to a particular datatype
    const final_value_1 = convert_to_type(input_1, type_1);
    const final_value_2 = convert_to_type(input_2, type_2);

    //Comparing the values:
    const comparator = document.getElementById("compare_operator").value; 
    const comparison_logic = new ComparisonOperators();
    let final_result = null;

    switch(comparator){
        case "==":
            final_result = comparison_logic.double_equals(final_value_1, final_value_2);
            break;
        case "===":
            final_result = comparison_logic.triple_equals(final_value_1, final_value_2);
            break;
        case "!=":
            final_result = comparison_logic.not_equals(final_value_1, final_value_2);
            break;
        case "!==":
            final_result = comparison_logic.double_not_equals(final_value_1, final_value_2);
            break;
        case ">":
            final_result = comparison_logic.greater(final_value_1, final_value_2);
            break;
        case "<":
            final_result = comparison_logic.less_than(final_value_1, final_value_2);
            break;
        case ">=":
            final_result = comparison_logic.greater_equals(final_value_1, final_value_2);
            break;
        case "<=":
            final_result = comparison_logic.less_equals(final_value_1, final_value_2);
            break;
        default:
            return;
    }

    // Writing the result on the HTML page:
    const final_results_id = document.querySelector(".final_results");
    final_results_id.textContent = final_result;
});
