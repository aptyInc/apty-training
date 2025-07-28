let str_var = "Keerthana"
let num_var = 1
let bool_var = true
let undef_var;
let null_var = null;
let sym_var = Symbol("abc")
let obj_var = { 1: "Keerthana", 2: "Kikki" }
const dtypes = { 'String': str_var, 'Number': num_var, 'Boolean': bool_var, 'Undefined': undef_var, 'Null': null_var, 'Symbol': sym_var, 'Object': obj_var }
function printTypesOfVar() {
    for (let key in dtypes) {

        document.getElementById(key).innerHTML += `${key}: ${typeof (dtypes[key])}`
    }
}
