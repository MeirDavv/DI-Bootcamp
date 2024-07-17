
class TodoList{
    constructor() {
        this.tasks = [];
    }

    addTask(taskName){
        const task = {
            taskName : taskName,
            completed : 'incomplete'
        };
        this.tasks.push(task);
    }

    markTaskAsComplete(taskName){
        const index = this.tasks.findIndex(task => task.taskName === taskName);
        this.tasks[index].completed = 'completed';
    }

    listAllTasks(){
        console.log(this.tasks);
    }
}


export {TodoList}