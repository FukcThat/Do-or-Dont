const { renderTodos } = require("./render");

class Collection {
  constructor(collectionName) {
    this.todoList = [];
    this.collectionName = collectionName;
  }

  // Add todo
  addTodo(taskItem) {
    this.todoList.push(taskItem);
    renderTodos(this.todoList);
  }
  // Remove Todo
  // Get Todo Collection
}

module.exports = Collection;
