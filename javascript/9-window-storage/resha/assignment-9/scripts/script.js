let newWindow;

document.getElementById("openBtn").addEventListener("click", () => {
    newWindow = window.open("", "", "width=400,height=300");

    if (newWindow) {
        const heading = newWindow.document.createElement("h2");
        heading.textContent = "Hello! I am a new window";

        const para = newWindow.document.createElement("p");
        para.textContent = "This content was added with JavaScript.";

        newWindow.document.body.appendChild(heading);
        newWindow.document.body.appendChild(para);
    }
});

document.getElementById("resizeBtn").addEventListener("click", () => {
    if (newWindow) {
        newWindow.resizeTo(600, 400);
        newWindow.focus();
    }
});

document.getElementById("closeBtn").addEventListener("click", () => {
    if (newWindow) {
        newWindow.close();
    }
});
