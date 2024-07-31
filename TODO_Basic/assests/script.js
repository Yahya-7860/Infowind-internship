let btn = document.querySelector(".addBtn");
let ul = document.querySelector(".task");
let text = document.querySelector(".textValue");
console.log('javascript runs through a single file in browser')

import { strikeThr, addTask, removeTask } from "./moduleBundle.js";

//pressing 'add' button to add list
btn.addEventListener("click",addTask)

//pressing enter key to add list
text.addEventListener('keypress',(e)=>{
    if(e.key=="Enter"){
        e.preventDefault();
        addTask();
    }
})

//marking the task (strike through)
ul.addEventListener("click",strikeThr)

//removing added list
ul.addEventListener("click",removeTask)
