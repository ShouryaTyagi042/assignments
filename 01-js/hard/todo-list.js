/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  tasks = [];
  add(task) {
    tasks.push(task);
  }
  remove(index) {
    task = tasks[index];
    this.tasks.splice(0, 1);
  }
  update(index, updatedTodo) {}
}

module.exports = Todo;
