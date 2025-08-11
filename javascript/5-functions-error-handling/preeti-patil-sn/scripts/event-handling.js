let count = 0;

const increment = () => {
    count++;
    document.getElementById("result").innerText = count;
};

document.getElementById("button").addEventListener("click", increment);
