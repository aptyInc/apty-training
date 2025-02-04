function sortString() {
    const inputString = document.getElementById('inputString').value;

    if (!inputString.trim()) {
        document.getElementById('result').textContent = "Please enter a valid string!";
        return;
    }

    
    const sortedString = inputString.split('')  
                                    .sort()    
                                    .join(''); 

    document.getElementById('result').textContent = `Sorted String: ${sortedString}`;
}
