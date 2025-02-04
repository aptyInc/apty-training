

export function ADD_TASK(val){
    
    return {type:"ADD_TASK",text:val}
}

export function TOGGLE_TASK(val){
    
    return {type:"TOGGLE_TASK",id:val}
}

export function REMOVE_TASK(val){
    
    return {type:"REMOVE_TASK",id:val}
}