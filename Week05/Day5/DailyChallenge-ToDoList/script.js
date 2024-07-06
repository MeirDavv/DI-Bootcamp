const tasks = [];

const ulElement = document.createElement("ul");
const listTasks = document.getElementsByClassName("listTasks")[0];

listTasks.appendChild(ulElement);


const form = document.getElementById('To-Do-form');
form.addEventListener("submit",addTask);

function addTask(e){
    e.preventDefault();

    const formData = new FormData(e.target);

    const taskName = formData.get('taskName');

    if (taskName !==undefined && taskName!=="")
        tasks.push(taskName);
    renderTasks(tasks);
    form.reset();
}

function renderTasks(tasks){
    clearTasks();
    for (let task of tasks){
        taskName = task

        let liElement = document.createElement("li");

        let iconElement = document.createElement("i");
        iconElement.classList.add("fa=solid","fa-x")

        let checkBoxElement = document.createElement("input")
        checkBoxElement.setAttribute("type","checkbox")

        let taskElement = document.createElement("span");
        taskElement.innerText = taskName;

        liElement.appendChild(iconElement);
        liElement.appendChild(checkBoxElement);
        liElement.appendChild(taskElement);

        ulElement.appendChild(liElement);
    }
}

function clearTasks(){
    ulElement.innerHTML ="";
}