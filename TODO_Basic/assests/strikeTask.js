
//marking the task (strike through)
export function strikeThr(e){
    if(e.target.nodeName === "INPUT"){
        const Upper_div = e.target.parentElement;
        const Li = Upper_div.parentElement;
        Li.classList.toggle("check_list")
    }
}