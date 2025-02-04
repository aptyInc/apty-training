const editableDiv = document.getElementById('editable');
const textSpan = document.getElementById('text');
const iconSpan = document.getElementById('icon');

editableDiv.addEventListener('click', () => {
    if (!editableDiv.contains(document.querySelector('textarea'))) {
        const textarea = document.createElement('textarea');
        textarea.value = textSpan.textContent;
        editableDiv.innerHTML = ''; 
        editableDiv.appendChild(textarea); 
        textarea.focus(); 
        textarea.addEventListener('blur', handleBlur); 
        textarea.addEventListener('keydown', handleKeyDown); 
    }
});

function handleBlur(event) {
    const newContent = event.target.value;
    textSpan.textContent = newContent; 
    editableDiv.innerHTML = ''; 
    editableDiv.appendChild(textSpan); 
    editableDiv.appendChild(iconSpan); 
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        event.target.blur(); 
    }
}
