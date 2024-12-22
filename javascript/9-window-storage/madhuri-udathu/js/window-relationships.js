window.addEventListener("message", (event) => {
    console.log("Top window received:", event.data);

    
    if (event.data === "Hello from Child") {
        event.source.postMessage("Hello from Top Window", "*");
    }
});