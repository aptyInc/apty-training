function countElements(){
    const div_root = document.querySelector('.div_root');
    nestedElements(div_root, 1)
}

function nestedElements(div_root, count){
    if(div_root.children.length == 0){
        return 0;
    }

    const ol_el = document.querySelector('ol');
    const ol_list = document.createElement('li');
    ol_list.textContent = `For level ${count} we have ${div_root.children.length}`;
    ol_el.appendChild(ol_list);

    Array.from(div_root.children).forEach((child) => {
        nestedElements(child, count+1);
    });

}

