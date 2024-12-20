function enableEditing(div) {
    const content = div.querySelector('#content');
    const icon = div.querySelector('.icon'); 
    const textarea = document.createElement('textarea');
    textarea.value = content.innerText;  
    div.innerHTML = ''; 
    div.appendChild(textarea);
    textarea.focus();

    textarea.addEventListener('blur', function () {
        content.innerText = textarea.value;  
        div.innerHTML = ''; 
        div.appendChild(content); 
        div.appendChild(icon); 
    });
}

const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
            // If the added node is the editable div, add event listener
            if (node.id === 'editableDiv') {
                console.log('Editable div added');
                const icon = node.querySelector('.icon');
                if (icon) {
                    icon.addEventListener('click', function (event) {
                        event.stopPropagation();
                        enableEditing(node);
                    });
                }

                node.addEventListener('click', function () {
                    enableEditing(node);
                });
            }
        });
    });
});

// Configure the observer to watch for added nodes
observer.observe(document.body, { childList: true, subtree: true });

// Test: Dynamically add the editableDiv
setTimeout(() => {
    const div = document.createElement('div');
    div.id = 'editableDiv';
    div.innerHTML = `
        <span id="content">Click here to edit</span>
        <span class="icon">✏️</span>
    `;
    document.body.appendChild(div);
}, 1000);
