const display_result = document.querySelector('.show-result');

const parent_element = document.querySelector('.parent');
parent_element.addEventListener('mouseover', (event) => {
    display_result.innerHTML += "<div>I am from parent</div>"

    //This is not required because this is the parent but if we have a parent than we have to also do it.
    //event.stopPropagation()
})

const child_element = document.querySelector('.child');
child_element.addEventListener('mouseover', (event) => {
    display_result.innerHTML += "<div>I am from child</div>"
    event.stopPropagation();
})


