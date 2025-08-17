document.getElementById("go").addEventListener("click", () => {
    const url = document.getElementById("url").value;
    if(url !== "page2.html") {
        document.getElementById("output").innerText = "Please enter the valid url!";
        return;
    }
    window.location.href = url;
})

document.getElementById("reload").addEventListener("click", () =>{
    location.reload();
})
