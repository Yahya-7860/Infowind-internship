let text = document.querySelector(".textValue");
let taskList = document.querySelector(".task");


//adding the task to the list
export function addTask(){
    if(text.value.length!=0){
        const list = `<li class="list">
        <div class="first">
            <input type="checkbox" class="marked">
            <p class="text listText">${text.value}</p>
        </div>
        <div>
            <i class="fa-solid cross fa-circle-xmark"></i>
        </div>  
    </li>`
    taskList.innerHTML+=list;     
    text.value='';   
    }
}