// import check local storage functionality

// Render collection function
// --> Get collection container and set innerHTML to ""
// --> Create new div forEach collection and add classlist for styling
// --> Add eventlistener onclick to collection's nav btn
// --> Set collection's nav btn text to projectName
// --> Append nav btn to collection container

// Render To do functon
export const renderTodos = (collection) => {
  // --> Get Todo container
  const taskContainer = document.querySelector(".task-container");
  taskContainer.innerHTML = "";

  // --> Create a new div forEach to do and add a classlist for styling
  collection.forEach((todo, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");

    // Task Element
    let taskElement = document.createElement("p");
    taskElement.textContent = todo.task;
    taskDiv.appendChild(taskElement);

    taskContainer.appendChild(taskDiv);

    // Collection Select
    // DueDate
    // Priority
    // Assignment
    // Notes
  });

  // --> Create a delete btn, add eventlistener onclick and append to to do div
  // --> For Each Element separately;
  // ----> create new element
  // ----> set values
  // ----> append to div
};

// Render Default Collection (All to dos)
// --> Make empty array for all todo's
// --> for each collection in the collection data, run 'get collection's todo's" function and push each item to the array
// --> call render todos and pass in all todo's array and the default collection

// Render One Project

// Update Header should there be one (displays current collection name)
