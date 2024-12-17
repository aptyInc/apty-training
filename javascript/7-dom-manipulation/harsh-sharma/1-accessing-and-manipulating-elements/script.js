function changeColor(e) {
    const col_id = document.querySelectorAll('p[id]');
    console.log(Array.isArray(col_id));
    col_id.forEach((element) => { 
        element.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    })    
}

function toggleBackgroundColor(){
    const col_className = document.getElementsByClassName('textClass');
    Array.from(col_className).forEach((element) => {  
        element.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    })
}

function changeSpanText(){
    const getAllElements = document.getElementsByTagName('span');
    Array.from(getAllElements).forEach((element) => {  
        element.innerText = `Apty.io... Random Elements: ${Math.floor(Math.random()*100)}`;
    })
}


function toggleInputDisabled(){
    const input_elments = document.getElementsByName('user');
    input_elments.forEach((element) => { 
        element.disabled = !element.disabled;
    })
}

function addCustomAttribute(){
    const p_element  = document.querySelector('[data-custom]');
    p_element.setAttribute('data-custom', 'custom-value');
    p_element.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
    p_element.innerText = `Custom Attribute Added for this`;
}