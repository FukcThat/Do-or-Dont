import { collectionData } from "./data";
import { renderTodos } from "./render";
import Todo from "./Todo";
// // import collection data
// // import renderOneProject functionality
// // import check local storage functionality

// Get all form Inputs
const taskInput = document.querySelector(".taskInput");
const collectionInput = document.querySelector("#collectionInput");
const dueDateInput = document.querySelector(".dueInput");
const priorityInput = document.querySelectorAll(".priorityInput");
const assignedInput = document.querySelector(".assignedInput");
const noteInput = document.querySelector(".noteInput");

const todoFormSubmitBtn = document.querySelector(".newTodoForm--submit-btn");

// Open Form Function

// Close Form Function

// Submit Todo-Form
const submitTodoForm = () => {
  // --> Make variable for checked priority value
  const checkedPriorityInput = document.querySelector(
    "input[name=priorityInput]:checked"
  );

  // Validate Inputs
  if (taskInput.value === "") {
    window.alert("Please add at least a task name");
  } else {
    // Make new todo with form values
    const newTodo = new Todo(
      taskInput.value,
      collectionInput.value,
      dueDateInput.value,
      checkedPriorityInput.value,
      assignedInput.value,
      noteInput.value
    );

    collectionData.forEach((collection) => {
      if (collection.collectionName === "Main") {
        collection.addTodo(newTodo);
      }
    });
  }
  // --> Push the new todo object to relevant collection

  // --> Re-render To-dos & close modal

  // // ---> Save collection data in local storage
};

// Event Listener function to open, close and submit buttons
export const todoFormEventListeners = () => {
  todoFormSubmitBtn.addEventListener("click", submitTodoForm);
};
