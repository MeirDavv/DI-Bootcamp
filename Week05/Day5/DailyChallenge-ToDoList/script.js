const tasks = [];

const ulElement = document.createElement("ul");
const listTasks = document.getElementsByClassName("listTasks")[0];

listTasks.appendChild(ulElement);

createClearButton();


const form = document.getElementById('To-Do-form');
form.addEventListener("submit",addTask);

let taskId = 0;

function addTask(e){
    e.preventDefault();

    const formData = new FormData(e.target);

    const taskName = formData.get('taskName');

    if (taskName !==undefined && taskName!=="")
        {
            let task ={
                task_id : taskId,
                text : taskName,
                done : false
            }
            taskId++;
            tasks.push(task)
        }
        
    renderTasks(tasks);
    form.reset();
}

function renderTasks(tasks){
    clearTasks();
    for (let task of tasks){
        taskName = task['text'];

        if (taskName == "")
            continue;


        let liElement = document.createElement("li");

        let iconElement = document.createElement("i");
        iconElement.classList.add("fa=solid","fa-x")
        iconElement.setAttribute("id", "deleteItem");
        iconElement.addEventListener('click',function(event){
            deleteItem(event.target);
        });

        let checkBoxElement = document.createElement("input")
        checkBoxElement.setAttribute("type","checkbox")
        checkBoxElement.addEventListener("click", function(event){
            crosslineItem(event.target);
        });

        let taskElement = document.createElement("span");
        taskElement.innerText = taskName;
        taskElement.setAttribute("data-task-id", task['task_id'])

        if (task['done']=== true){
            taskElement.classList.add('done');
        }

        liElement.appendChild(iconElement);
        liElement.appendChild(checkBoxElement);
        liElement.appendChild(taskElement);

        ulElement.appendChild(liElement);
    }

}

function clearTasks(){
    ulElement.innerHTML ="";
}

function crosslineItem(checkbox){
    let taskElement = checkbox.nextElementSibling;
    item_id = taskElement.getAttribute('data-task-id')
    if(tasks[item_id].done === true)
        tasks[item_id].done = false;
    else{
        tasks[item_id].done = true
    }
    renderTasks(tasks);
}


function deleteItem(icon){
    let taskElement = icon.nextElementSibling.nextElementSibling;
    item_id = taskElement.getAttribute('data-task-id')
    tasks[item_id].text = "";
    
    renderTasks(tasks);
}

function createClearButton(){
    clearButton = document.createElement("button");
    clearButton.innerText = 'Clear';
    clearButton.setAttribute("id", "clearButton");
    listTasks.appendChild(clearButton);
    clearButton.addEventListener('click',clearTasks);

    renderTasks(tasks);
}