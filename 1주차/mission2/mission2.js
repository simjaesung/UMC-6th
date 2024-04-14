const form = document.querySelector(".form");
const todoTask = document.querySelector(".todo");
const doneTask = document.querySelector(".done");
const tasktext = document.querySelector("#text");

function addTask(task){
    if(!task) return;

    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const newTaskText = document.createElement("div");
    newTaskText.classList.add("tasktext");
    newTaskText.innerText = task;

    const newTaskBtnBox = document.createElement("div");
    newTaskBtnBox.classList.add("taskbtn");
    const newTaskBtn = document.createElement("button");
    newTaskBtn.innerText = "완료";

    newTaskBtn.addEventListener("click",completeTask);
    newTaskBtnBox.appendChild(newTaskBtn);

    newTask.appendChild(newTaskText);
    newTask.appendChild(newTaskBtnBox);

    todoTask.appendChild(newTask);
    tasktext.value = "";
}

function completeTask(e){
    const tmp = e.target.parentElement.parentElement;
    tmp.remove();
    
    tmp.lastChild.lastChild.innerText = "삭제";
    doneTask.appendChild(tmp);

    tmp.lastChild.lastChild.addEventListener("click",delTask);
}

function delTask(e){
    const tmp = e.target.parentElement.parentElement;
    tmp.remove();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(tasktext.value);
});
