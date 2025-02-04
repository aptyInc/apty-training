const showFunction = () => {
    const display = document.querySelector(".show_result");


    let string_value =  document.querySelector("#value_callback").value || "Default value";

    display.innerHTML = string_value ? callbackFunction(converToUpperCase, string_value)  : callbackFunction(converToUpperCase);


}

const callbackFunction = (toUpperCase, string_value) => {
    return toUpperCase(string_value);
}


const converToUpperCase = (value = "Default Value") => value.toUpperCase(); 