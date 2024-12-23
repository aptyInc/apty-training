function handleSubmit(event) {
    event.preventDefault();
    const input_name = document.querySelector("#name").value;
    let input_wrong_name = false;

    for (let each_value of input_name) {
        console.log(each_value);
        if (
            !(
                (each_value >= "a" && each_value <= "z") ||
                (each_value >= "A" && each_value <= "Z")
            )
        ) {
            input_wrong_name = true;
            console.log(each_value);
        }
    }

    console.log(input_wrong_name);
    if (input_name.length <= 0 || input_wrong_name) {
        event.preventDefault();
        alert("Wrong Input Value should be between a to z");
    } else {
        alert("Form Submitted");
    }
}
