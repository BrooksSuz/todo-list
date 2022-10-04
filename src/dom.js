import { ToDo } from './createToDo.js'; 

const divToDoContainer = document.querySelector('.todo-container'); 
const aDefault = document.querySelector('.default-project');

const btnCreate = document.querySelector('button').addEventListener('click', function() {
  let inputTitle = document.getElementById('title'); 
  let inputDescription = document.getElementById('description'); 
  let inputDueDate = document.getElementById('due-date'); 
  let inputPriority = document.getElementById('priority'); 
  
  let newToDo = new ToDo(
    inputTitle.value, 
    inputDescription.value, 
    inputDueDate.value, 
    inputPriority.value); 
  }); 


aDefault.addEventListener('click', function() {
  while (divToDoContainer.children.length > 1) {
    divToDoContainer.children.remove(); 
  }
}); 