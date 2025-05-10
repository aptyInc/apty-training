// Create a container element to display results
let conversion_results = document.getElementById("conversion_results");

let changing_variable = 123;
let string_var = "I am a String";
let number_var = 123;
let boolean_var = true;
let undefined_var;
let null_var = null;
let symbol_var = Symbol("A");
let object_var = { employee1: "harsh", employee2: "sai" };

// Start building the results string
let results = "";

// Converting from String
results += `<strong>From String ("I am a String"):</strong><br>`;
results += `String to Number: ${Number(string_var)}<br>`;
results += `String to Boolean: ${Boolean(string_var)}<br>`;
results += `String to Object: ${Object(string_var)}<br>`;
//  results += `String to Symbol: ${(Symbol(string_var))}<br>`;
results += `<br>`;

// Converting from Number (123)
results += `<strong>From Number (123):</strong><br>`;
results += `Number to String: ${String(number_var)}<br>`;
results += `Number to Boolean: ${Boolean(number_var)}<br>`;
results += `Number to Object: ${Object(
  number_var
)}. It looks like Eg: [Number: 123]<br> `;
//  results += `Number to Symbol: ${Symbol(number_var)}<br>`;
results += `<br>`;

// Converting from Boolean (true)
results += `<strong>From Boolean (true):</strong><br>`;
results += `Boolean to String: ${String(boolean_var)}<br>`;
results += `Boolean to Number: ${Number(boolean_var)}<br>`;
results += `Boolean to Object: ${Object(boolean_var)}<br>`;
//  results += `Boolean to Symbol: ${Symbol(boolean_var)}<br>`;  --> Not Symbol
results += `<br>`;

// Converting from Undefined (undefined)
results += `<strong>From Undefined (undefined):</strong><br>`;
results += `Undefined to String: ${String(undefined_var)}<br>`;
results += `Undefined to Number: ${Number(undefined_var)}<br>`;
results += `Undefined to Boolean: ${Boolean(undefined_var)}<br>`;
results += `Undefined to Object: ${Object(undefined_var)}<br>`;
//  results += `Undefined to Symbol: ${Symbol(undefined_var)}<br>`; --> Not possible
results += `<br>`;

// Converting from Null (null)
results += `<strong>From Null (null):</strong><br>`;
results += `Null to String: ${String(null_var)}<br>`;
results += `Null to Number: ${Number(null_var)}<br>`;
results += `Null to Boolean: ${Boolean(null_var)}<br>`;
results += `Null to Object: ${Object(null_var)}<br>`;
results += `<br>`;

// Converting from Symbol
results += `<strong>From Symbol (Symbol("A")):</strong><br>`;
results += `Symbol to String: ${String(symbol_var)}<br>`;
//  results += `Symbol to Number: ${Number(symbol_var)}<br>`;
results += `Symbol to Boolean: ${Boolean(symbol_var)}<br>`;
//  results += `Symbol to Object: ${Object(symbol_var)}<br>`;
results += `<br>`;

// Converting from Object (e.g., employee1: "harsh", employee2: "sai")
results += `<strong>From Object (Object):</strong><br>`;
//It will show [Object Object] to proper convert it we have to JSON.stringyfy
results += `Object to String This will give [Object Object]: ${String(
  object_var
)}<br>`;
//This is because the toString() method was implicitly called on the person object when concatenating it with the string 'Person: '. The default implementation of the toString() method returns [object Object]. Fixing [object Object]
results += `Object to String. For this We have to use JSON.stringyfy() to get the string. This converts to JSON string: ${JSON.stringify(
  object_var
)}<br>`;
results += `Object to Number: ${Number(object_var)}<br>`;
results += `Object to Boolean: ${Boolean(object_var)}<br>`;
//  results += `Object to Symbol: ${Symbol(object_var)}<br>`;
results += `<br>`;

// Insert all results into the div
conversion_results.innerHTML = results;
