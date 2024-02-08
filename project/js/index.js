let cancelBtn=document.querySelector(".cancel");
let addTodo=document.querySelector("add-todo");
let todoBtn=document.querySelector(".d-none");  
let saveBtn=document.querySelector(".save");
todoBtn.addEventListener("click",()=>{
    addTodo.classList.remove(".d-none");
});
cancelBtn.addEventListener("click",()=>{
    addTodo.classList.add(".d-none");
});
let nam=document.querySelector("#todo-name");
let description=document.querySelector("#todo-description");
let priority=document.querySelector("#priority");

saveBtn.addEventListener("click",()=>{
        let newTodo={
            todoTitle: nam.value,
            description: description.value,
            priority:priority.value,
              
        };
        let  todoList= localStorage.getItem("newTodo"); // null;
    
        todoList=todoList===null ? []:JSON.parse(todoList);

});
