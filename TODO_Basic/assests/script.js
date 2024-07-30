let btn = document.querySelector(".addBtn");
let taskList = document.querySelector(".task");
let text = document.querySelector(".textValue");
let marked = document.querySelector(".marked")
let listText = document.querySelector(".listText");
let cross = document.querySelector(".cross");
let ul = document.querySelector(".task");


//adding the task to the list
function addTask(){
    if(text.value.length!=0){
        let list = `<li class="list">
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
btn.addEventListener('click',addTask)

//pressing enter key to add
text.addEventListener('keypress',(e)=>{
    if(e.key=="Enter"){
        e.preventDefault();
        addTask();
    }
})


//marking the task (strike through)
ul.addEventListener("click",(e)=>{
    if(e.target.nodeName === "INPUT"){
        e.target.parentElement.parentElement.classList.toggle("check_list")
    }
})


//removing added list
ul.addEventListener("click",(e)=>{
    if(e.target.nodeName === "I"){
        e.target.parentElement.parentElement.remove();
    }
})
