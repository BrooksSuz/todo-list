import { ToDo } from './createToDo.js'; 

const divToDoContainer = document.querySelector('.todo-container'); 
const aDefault = document.querySelector('.default-project');

const btnCreate = document.querySelector('button').addEventListener('click', function() {
  const inputTitle = document.getElementById('title'); 
  const inputDescription = document.getElementById('description'); 
  const inputDueDate = document.getElementById('due-date'); 
  const inputPriority = document.getElementById('priority'); 
  
  const newToDo = new ToDo(
    inputTitle.value, 
    inputDescription.value, 
    inputDueDate.value, 
    inputPriority.value); 
    
  const divToDo = document.createElement('div')
  divToDo.textContent = newToDo; 
  divToDoContainer.appendChild(divToDo); 
  }); 


aDefault.addEventListener('click', function() {
  while (divToDoContainer.children.length > 1) {
    divToDoContainer.children[1].remove(); 
  }
}); 

aDefault.addEventListener('click', function() {

})