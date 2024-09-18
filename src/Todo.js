class Todo {
  constructor(
    todoTask,
    todoCollection,
    todoDueDate,
    todoPriority,
    todoAssigned,
    todoNotes
  ) {
    this.task = todoTask;
    this.collection = todoCollection;
    this.dueDate = todoDueDate;
    this.priority = todoPriority;
    this.assigned = todoAssigned;
    this.notes = todoNotes;
  }
}

module.exports = Todo;
