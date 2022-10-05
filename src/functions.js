import { ToDo } from './classToDo.js'; 

const arrToDo = []; 
const toDoContainer = document.querySelector('.todo-container'); 

export function createToDo() {
  let inputTitle = document.getElementById('title'); 
  let inputDescription = document.getElementById('description'); 
  let inputDueDate = document.getElementById('due-date'); 
  let inputPriority = document.getElementById('priority'); 
  let newToDo = new ToDo(
    inputTitle.value, 
    inputDescription.value, 
    inputDueDate.value, 
    inputPriority.value); 

  return arrToDo.push(newToDo); 
}; 

export function toDoToDom() {
  let pToDo = document.createElement('p'); 
  pToDo.textContent = `${arrToDo[arrToDo.length - 1].title}`; 
  toDoContainer.appendChild(pToDo); 
}; 