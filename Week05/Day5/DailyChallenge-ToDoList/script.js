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

    

    if (taskName !==undefined && taskName!==""){
        tasks.push(taskName);

        let liElement = document.createElement("li");

        let iconElement = document.createElement("i");
        iconElement.classList.add("fa=solid","fa-x")

        let checkBoxElement = document.createElement("input")
        checkBoxElement.setAttribute("type","checkbox")
        console.log(checkBoxElement)

        let taskElement = document.createElement("span");
        taskElement.innerText = taskName;

        liElement.appendChild(iconElement);
        liElement.appendChild(checkBoxElement);
        liElement.appendChild(taskElement);

        ulElement.appendChild(liElement);
    }

    const taskElement = document.getElementsByName('taskName')[0];
    taskElement.value = ""
}
