import * as css from "./style.css";

import { todoFormEventListeners } from "./todo-modal.js";
import { renderTodos } from "./render.js";
import { collectionData } from "./data.js";

// import project-form eventlistener function
// import render default project, render one project, render projects functions

// call the eventlistener functions
todoFormEventListeners();
renderTodos(collectionData);

// call renderProjects passing in the project data
// call render default project function
// call render one project function and pass in default for some yet unknown reason
