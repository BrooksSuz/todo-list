import { ToDo } from './createToDo.js'; 

const btnCreate = document.querySelector('button').addEventListener('click', function() {
  const inputTitle = document.getElementById('title'); 
  const inputDescription = document.getElementById('description'); 
  const inputDueDate = document.getElementById('due-date'); 
  const inputPriority = document.getElementById('priority'); 

  const newToDo = new ToDo(inputTitle.value, inputDescription.value, inputDueDate.value, inputPriority.value); 

  console.log(newToDo); 
}); 