function showTotalElements(){
    const totalElements = document.querySelectorAll('*');
    const different_types = {};
    totalElements.forEach(element => {
        if(different_types[element.tagName]){
            different_types[element.tagName]++;
        }else{
            different_types[element.tagName] = 1;
        }
    });
    different_types['li'] = different_types['li'] || 0;
    different_types['li'] = different_types['li'] + Object.keys(different_types).length;

    const display_result = document.querySelector('.display-result');
    for(key in different_types){
        const create_li = document.createElement('li');
        create_li.textContent = `${key} : ${different_types[key]}`;
        display_result.appendChild(create_li);
        
    }
   
}