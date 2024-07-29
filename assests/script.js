var btn = document.querySelector(".addBtn");
var taskList = document.querySelector(".task");
var text = document.querySelector(".textValue");
var marked = document.querySelector(".marked")
var listText = document.querySelector(".listText");
var cross = document.querySelector(".fa-solid");
var ul = document.querySelector(".task");




//adding the task to the list




btn.addEventListener('click',()=>{

    if(text.value.length!=0){
        var list = `<li class="list">
        <div class="first">
            <input type="checkbox" class="marked">
            <p class="text listText">${text.value}</p>
        </div>
        <div>
            <i class="fa-solid fa-circle-xmark"></i>
        </div>  
    </li>`
    taskList.innerHTML+=list;     
    text.value='';   
    }
    else{
        //empty text box portion (show error)
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