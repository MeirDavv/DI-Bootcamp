const fs = require('fs');
const path = require('path');
const tasksPath = path.join(__dirname, '../config/tasks.json')

const readTasks = () => {
    try{
        const data = fs.readFileSync(tasksPath, 'utf-8');
        return JSON.parse(data);
    }catch(err){
        console.error(err);
        return [];
    }
}

const writeTasks = (tasks) => {
    try{
        fs.writeFileSync(tasksPath, JSON.stringify(tasks,null,2));
    }catch(err){
        console.error(err);
    }
}


const Task = {
    getAllTasks: () => readTasks(),
    getTaskById: (id) => readTasks().find(task => task.id == id),
    createTask: (task) => {
        const tasks = readTasks();
        const newTask = {id: tasks.length+1, ...task};
        tasks.push(newTask);
        writeTasks(tasks);
        return newTask;
    },
    updateTask: (id, task) => {
        const tasks = readTasks();
        const index = tasks.findIndex(task => task.id == id);
        if (index == -1){
            return null;
        }
        tasks[index] = {id, ...task};
        writeTasks(tasks);
        return tasks[index];
        
    },
    deleteTask: (id) => {
        const tasks = readTasks();
        const index = tasks.findIndex(task => task.id == id);
        if (index == -1){
            return null
        }
        else{
            const deletedTask = tasks.splice(index,1);
            writeTasks(tasks);
            return deletedTask;
        }
        
    }
};

module.exports = {Task};