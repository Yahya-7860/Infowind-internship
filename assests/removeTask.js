

export function removeTask(e){
    if(e.target.nodeName === "I"){
        const Upper_div = e.target.parentElement;
        const Li = Upper_div.parentElement;
        Li.remove();
    }
}