let getButton = document.querySelector('.button');
let getText = document.querySelector('.text');



// getButton.addEventListener('click',function(){
//     getText.classList.toggle('changeColorAndSizeToText');
// })


let getTextFormInput = document.querySelector('.taskNameField');
let getButtonForAddingTasks = document.querySelector('.toDoButton');
let getErrorText = document.querySelector('.cantBeEmptyText');
let getTaskListContainer = document.querySelector('.task-list');



getButtonForAddingTasks.addEventListener('click', createTask);

getTextFormInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        createTask();
        getButtonForAddingTasks.classList.add('toDoButton--active');

    }
});

getTextFormInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        getButtonForAddingTasks.classList.remove('toDoButton--active');
        
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


    let taskBox = 
    `
    <div class="task-list__task new-task">
            ${getTaskValue} 
            <span id="opis-teskta"> (Check the completed task) </span>\t
            <input type="checkbox" id="moj-checkbox" value="da" onchange="toggleCompleted(this)">
            
            <hr>

            <span id="remove-description"> (Remove task you dont need) </span>\t
            <button class="removeTask">Remove</button>
            

        </div>
    `;
    getTaskListContainer.innerHTML += taskBox;
    

    let eraseButtons = document.querySelectorAll('.removeTask');
    for(let eraseButton of eraseButtons){
        eraseButton.addEventListener('click', function(){
            this.parentNode.remove();
            
        });
    }
}


function toggleCompleted(checkbox) {
    let taskDiv = checkbox.parentNode;
    let removeDescription = taskDiv.querySelector("#remove-description");
    let removeDescription2 = taskDiv.querySelector("#opis-teskta");
    if (checkbox.checked) {
      taskDiv.classList.add('completed');
      removeDescription.style.display = "none"; // dodajemo ovu liniju da se sakrije element sa id-jem "remove-description" kada se checkbox cekira
      removeDescription2.style.display="none";
      taskDiv.style.backgroundColor = 'orange';
    } else {

      taskDiv.classList.remove('completed');
      removeDescription2.style.display="inline";
      removeDescription.style.display = "inline"; // dodajemo ovu liniju da se prikaže element sa id-jem "remove-description" kada se checkbox odcekira
      taskDiv.style.backgroundColor = '#ADD8E6';  
    }

  }
  
  
  
