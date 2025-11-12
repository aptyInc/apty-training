let count = 0;
const updateCounter = () => {
    count++;
    document.getElementById("countDisplay").textContent = count;
};

document.getElementById("countBtn").addEventListener("click", updateCounter);
