import { TodoList } from "./todo.js";

const list = new TodoList();
list.addTask('Do ex3 at DI-bootcamp');
list.addTask('Do ex4 at DI-bootcamp');
list.addTask('Drive home');
list.addTask('Eat');
list.addTask('Workout');
list.markTaskAsComplete('Do ex3 at DI-bootcamp');
list.markTaskAsComplete('Eat');
list.listAllTasks();