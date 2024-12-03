// Get the container element to display results
let coercion_results = document.getElementById("coercion_results");

let changing_variable = 5;
let string_var = "10";
let number_var = 10;
let boolean_var = true; // true is coerced to 1 and false is coerced to 0
let undefined_var; // undefined
let null_var = null; // null is coerced to 0
let symbol_var = Symbol("A"); // Symbol can't be coerced directly with +
let object_var = { key: "value" }; // Object, converted to string "[object Object]"

// Start building the results string
let results = "";

// Addition with String
results += `<div class="data-type-box">`;
results += `<strong>Adding with String (e.g., "10"):</strong><br>`;
results += `string("10") + number(5) → ${changing_variable + string_var} (String + Number)<br>`;
results += `string("10") + boolean(true) → ${string_var + boolean_var} (String + Boolean)<br>`;
results += `string("10") + undefined → ${string_var + undefined_var} (String + Undefined)<br>`;
results += `string("10") + null → ${string_var + null_var} (String + Null)<br>`;
try {
  results += `"5" + Symbol("A") → ${
    String(changing_variable) + symbol_var
  } (String + Symbol)<br>`;
} catch (e) {
  results += `"5" + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `"5" + {key: "value"} → ${
  String(changing_variable) + object_var
} (String + Object)<br>`;
results += `</div>`;

// Addition with Number
results += `<div class="data-type-box">`;
results += `<strong>Adding with Number (e.g., 10):</strong><br>`;
results += `5 + "10" → ${changing_variable + string_var} (Number + String)<br>`;
results += `5 + 10 → ${changing_variable + number_var} (Number + Number)<br>`;
results += `5 + true → ${changing_variable + boolean_var} (Number + Boolean)<br>`;
results += `5 + undefined → ${changing_variable + undefined_var} (Number + Undefined) → NaN<br>`;
results += `5 + null → ${changing_variable + null_var} (Number + Null) → ${changing_variable + null_var}<br>`;
try {
  results += `5 + Symbol("A") → ${changing_variable + symbol_var} (Number + Symbol)<br>`;
} catch (e) {
  results += `5 + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `5 + {key: "value"} → ${changing_variable + object_var} (Number + Object) → NaN<br>`;
results += `</div>`;

// Addition with Boolean
results += `<div class="data-type-box">`;
results += `<strong>Adding with Boolean (true = 1, false = 0):</strong><br>`;
results += `"10" + true → ${string_var + boolean_var} (String + Boolean) → ${string_var + boolean_var}<br>`;
results += `"10" + false → ${string_var + false} (String + Boolean) → ${string_var + false}<br>`;
results += `5 + true → ${changing_variable + boolean_var} (Number + Boolean) → ${changing_variable + boolean_var}<br>`;
results += `5 + false → ${changing_variable + false} (Number + Boolean) → ${changing_variable + false}<br>`;
try {
  results += `true + Symbol("A") → ${true + symbol_var} (Boolean + Symbol)<br>`;
} catch (e) {
  results += `true + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `false + {key: "value"} → ${false + object_var} (Boolean + Object) → ${false + object_var}<br>`;
results += `</div>`;

// Addition with Undefined
results += `<div class="data-type-box">`;
results += `<strong>Adding with Undefined:</strong><br>`;
results += `"10" + undefined → ${string_var + undefined_var} (String + Undefined) → ${string_var + undefined_var}<br>`;
results += `5 + undefined → ${changing_variable + undefined_var} (Number + Undefined) → NaN<br>`;
results += `"5" + null → ${string_var + null_var} (String + Null) → ${string_var + null_var}<br>`;
results += `5 + null → ${changing_variable + null_var} (Number + Null) → ${changing_variable + null_var}<br>`;
try {
  results += `undefined + Symbol("A") → ${
    String(undefined_var) + symbol_var
  } (Undefined + Symbol)<br>`;
} catch (e) {
  results += `undefined + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `</div>`;

// Adding with Null
results += `<div class="data-type-box">`;
results += `<strong>Adding with Null:</strong><br>`;
results += `"5" + null → ${string_var + null_var} (String + Null) → ${string_var + null_var}<br>`;
results += `5 + null → ${changing_variable + null_var} (Number + Null) → ${changing_variable + null_var}<br>`;
results += `Object + null → ${object_var + null_var} (Object + Null) → ${object_var + null_var}<br>`;
results += `Boolean (True) + null → ${true + null_var} (Boolean + Null) → ${true + null_var}<br>`;
results += `Boolean (False) + null → ${false + null_var} (Boolean + Null) → ${false + null_var}<br>`;
try {
  results += `null + Symbol("A") → ${String(null_var) + symbol_var} (Null + Symbol) → ${String(null_var) + symbol_var}<br>`;
} catch (e) {
  results += `null + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `</div>`;

// Adding with Object
results += `<div class="data-type-box">`;
results += `<strong>Adding with Object:</strong><br>`;
results += `"19" + {key: "value"} → ${string_var + object_var} (String + Object) → ${string_var + object_var}<br>`;
results += `5 + {key: "value"} → ${changing_variable + object_var} (Number + Object) → NaN<br>`;
try {
  results += `Object + Symbol("A") → ${
    String(changing_variable) + symbol_var
  } (Object + Symbol) → ${String(changing_variable) + symbol_var}<br>`;
} catch (e) {
  results += `Object + Symbol("A") → Error (cannot add Symbol directly)<br>`;
}
results += `</div>`;

// Adding with Symbol
results += `<div class="data-type-box">`;
results += `<strong>Adding with Symbol:</strong><br>`;
results += `Symbol will throw error if we try to add anything with it. To make it possible, we have to convert it to string or another data type.<br>`;
results += `</div>`;

// Insert all results into the div
coercion_results.innerHTML = results;
