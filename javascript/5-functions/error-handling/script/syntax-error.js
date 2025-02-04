
function parseJSON(jsonStr) {
    try {
        const result = JSON.parse(jsonStr);
        return {
            success: true,
            data: result,
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}


document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const jsonStr = document.getElementById("input").value;

    const result = parseJSON(jsonStr);

    const outputElement = document.getElementById("result");
    if (result.success) {
        outputElement.innerText = `Parsed JSON:\n${JSON.stringify(result.data, null, 2)}`;
        outputElement.style.color = "green";
    } else {
        outputElement.innerText = `Error: ${result.error}`;
        outputElement.style.color = "red";
    }
});
