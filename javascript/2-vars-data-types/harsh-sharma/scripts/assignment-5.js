// Get the container element to display results
let coercion_results = document.getElementById("coercion_results");

let changing_variable = 5;
let string_var = "10";
let number_var = 10;
let boolean_var = true; // true is coerced to 1
let undefined_var; // undefined
let null_var = null; // null is coerced to 0
let symbol_var = Symbol("A"); // Symbol can't be coerced directly with +
let object_var = { key: "value" }; // Object, converted to string "[object Object]"

// Start building the results string
let results = "";

// Addition with String
results += `<div class="data-type-box">`;
results += `<strong>Adding with String (e.g., "10"):</strong><br>`;
results += `"5" + "10" → ${String(changing_variable) + string_var}<br>`;
results += `"5" + 10 → ${String(changing_variable) + number_var}<br>`;
results += `"5" + true → ${String(changing_variable) + boolean_var}<br>`;
results += `"5" + undefined → ${String(changing_variable) + undefined_var}<br>`;
results += `"5" + null → ${String(changing_variable) + null_var}<br>`;
try {
  results += `"5" + Symbol("A") → ${
    String(changing_variable) + symbol_var
  }<br>`;
} catch (e) {
  results += `"5" + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `"5" + {key: "value"} → ${
  String(changing_variable) + object_var
}<br>`;
results += `</div>`;

// Addition with Number
results += `<div class=  "data-type-box">`;
results += `<strong>Adding with Number (e.g., 10):</strong><br>`;
results += `5 + "10" → ${changing_variable + string_var}<br>`; // coerces "10" to a number
results += `5 + 10 → ${changing_variable + number_var}<br>`;
results += `5 + true → ${changing_variable + boolean_var}<br>`; // coerces true to 1
results += `5 + undefined → ${changing_variable + undefined_var}<br>`; // NaN
results += `5 + null → ${changing_variable + null_var}<br>`; // coerces null to 0
try {
  results += `5 + Symbol("A") → ${changing_variable + symbol_var}<br>`; // symbol to string
} catch (e) {
  results += `5 + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `5 + {key: "value"} → ${changing_variable + object_var}<br>`; // object coerced to NaN
results += `<br>`;
results += `</div>`;

// Addition with Boolean
results += `<div class=  "data-type-box">`;
results += `<strong>Adding with Boolean (true = 1, false = 0):</strong><br>`;
results += `"10" + true → ${string_var + boolean_var}<br>`; // coerces true to "true"
results += `"10" + false → ${string_var + false}<br>`; // coerces false to "false"
results += `5 + true → ${changing_variable + boolean_var}<br>`; // coerces true to 1
results += `5 + false → ${changing_variable + false}<br>`; // coerces false to 0
try {
  results += `true + Symbol("A") → ${true + symbol_var}<br>`;
} catch (e) {
  results += `true + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `false + {key: "value"} → ${false + object_var}<br>`;
results += `</div>`;

// Addition with Undefined
results += `<div class=  "data-type-box">`;
results += `<strong>Adding with Undefined:</strong><br>`;
results += `"10" + undefined → ${string_var + undefined_var}<br>`; // coerces undefined to "10undefined"
results += `5 + undefined → ${changing_variable + undefined_var}<br>`; // coerces undefined to NaN
results += `"5" + null → ${string_var + null_var}<br>`; // coerces null to "null"
results += `5 + null → ${changing_variable + null_var}<br>`; // coerces null to 0
try {
  results += `undefined + Symbol("A") → ${
    String(undefined_var) + symbol_var
  }<br>`;
} catch (e) {
  results += `undefined + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `<br>`;
results += `</div>`;

// Adding with Null
results += `<div class=  "data-type-box">`;
results += `<strong>Adding with Null:</strong><br>`;
results += `"5" + null → ${string_var + null_var}<br>`; // coerces null to "null"
results += `5 + null → ${changing_variable + null_var}<br>`; // coerces null to 0
results += `Object + null → ${object_var + null_var}<br>`; // [Object Object]
results += `Boolean (True) + null → ${true + null_var}<br>`; // True is 1 and null is 0
results += `Boolean (False) + null → ${false + null_var}<br>`; //False is 0 and null is 0
try {
  results += `null + Symbol("A") → ${String(null_var) + symbol_var}<br>`;
} catch (e) {
  results += `null + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `</div>`;

// Adding with Object
results += `<div class="data-type-box">`;
results += `<strong>Adding with Object:</strong><br>`;
results += `"19" + {key: "value"} → ${string_var + object_var}<br>`; // coerces object to string "[object Object]"
results += `5 + {key: "value"} → ${changing_variable + object_var}<br>`; // coerces object to NaN
try {
  results += `Object + Symbol("A") → ${
    String(changing_variable) + symbol_var
  }<br>`;
} catch (e) {
  results += `Object + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `</div>`;

// Adding with Object
results += `<div class=  "data-type-box">`;
results += `<strong>Adding with Symbol:</strong><br>`;
results += `Symbol will throw error if we try to add anything with it. To make it possible we have to convert to string or any other datatype.`;
results += `</div>`;

// Insert all results into the div
coercion_results.innerHTML = results;
