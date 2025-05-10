
function sendMessage() {
    const iframe2 = window.parent.document.getElementById("iframe2");
    const userInput = document.getElementById("input");

    console.log(userInput.value);
    iframe2.contentWindow.postMessage(userInput.value, "*");
}

window.addEventListener("message", ({data}) => {
    const result = document.getElementById("result");
    result.textContent = data;
});