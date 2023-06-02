let getButtonForAddingTasks = document.querySelector('.toDoButton');
let getErrorText = document.querySelector('.cantBeEmptyText');
let getTaskListContainer = document.querySelector('.task-list');
let taskList = [];

// Učitavanje podataka iz local storagea
if (localStorage.getItem('taskList')) {
  taskList = JSON.parse(localStorage.getItem('taskList'));
  updateTaskList();
}

getButtonForAddingTasks.addEventListener('click', createTask);

getTextFormInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        createTask();
    }
});

function createTask(){
    let getTaskValue = getTextFormInput.value.trim();
    if(getTaskValue === '') {
        getErrorText.classList.add('cantBeEmptyText--visible');
        return;
    }
    getErrorText.classList.remove('cantBeEmptyText--visible');
    getTextFormInput.value='';

    // Dodavanje novog taska u listu i čuvanje u local storage
    taskList.push(getTaskValue);
    localStorage.setItem('taskList', JSON.stringify(taskList));

    updateTaskList();
}

function updateTaskList() {
  getTaskListContainer.innerHTML = '';
  for (let i = 0; i < taskList.length; i++) {
    let taskBox = `
      <div class="task-list__task new-task">
        ${taskList[i]} 
        <span id="opis-teskta"> (Check the completed task) </span>
        <input type="checkbox" id="moj-checkbox" value="da" onchange="toggleCompleted(this)">
        <br>
        <span id="remove-description"> (Remove task you dont need) </span>
        <button class="removeTask">Remove</button>
      </div>
    `;
    getTaskListContainer.innerHTML += taskBox;
  }

  let eraseButtons = document.querySelectorAll('.removeTask');
  for(let eraseButton of eraseButtons){
    eraseButton.addEventListener('click', function(){
      let index = Array.from(eraseButtons).indexOf(this);
      taskList.splice(index, 1);
      localStorage.setItem('taskList', JSON.stringify(taskList));
      updateTaskList();
    });
  }
}
