let count = 0;

const button = document.getElementById('clickButton');
const counter = document.getElementById('counter');

button.onclick = () => {
    count++; 
    counter.textContent = count; 
};
