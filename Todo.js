class Todo {
  constructor() {
    this.task = todoTask;
    this.dueDate = todoDueDate;
    this.notes = todoNotes;
    this.assigned = todoAssigned;
    this.priority = todoPriority;
  }
  // create new
  addTodo() {
    // On form submit
    // get form element values

    const taskInput = document.querySelector(".taskInput");
    const collectionInput = document.querySelector("#collectionInput");
    const dueDateInput = document.querySelector(".dueInput");
    const priorityInput = document.querySelectorAll(".priorityInput");
    const addignedInput = document.querySelector(".assignedInput");
    const noteInput = document.querySelector(".noteInput");

    // -> create elements for
    // ---> task, date, notes, assigned, prio

    const todoContainer = document.createElement("div");
    const todoTask = document.createElement("h4");
    const todoDueDate = document.createElement("p");
    // priority should be displayed as radio group when todo is entended, or as the 'complete task btn"'s color when condensed
    // collection should just be the same select with the selected value displayed, if no value is selected, show "All" pr smt

    // ---> with values from form

    todoTask.textContent = taskInput.value;
    todoDueDate.textContent = dueDateInput.value;

    todoContainer.appendChild(todoTask);
    todoContainer.appendChild(todoDueDate);
    // -> append to collection container
    // ---> Default: Push to "All" collection
  }

  // changePriority
  // changeStatus
  // edit
  // delete
}
