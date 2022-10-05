import { ToDo } from './classToDo.js'; 

const arrToDo = []; 
const toDoContainer = document.querySelector('.todo-container'); 

export function createToDo() {
  const inputTitle = document.getElementById('title'); 
  const inputDescription = document.getElementById('description'); 
  const inputDueDate = document.getElementById('due-date'); 
  const inputPriority = document.getElementById('priority'); 
  const newToDo = new ToDo(
    inputTitle.value, 
    inputDescription.value, 
    inputDueDate.value, 
    inputPriority.value); 
    
  return arrToDo.push(newToDo); 
}; 
  
export function toDoToDom() {
  const pToDo = document.createElement('p'); 
  pToDo.textContent = `${arrToDo[arrToDo.length - 1].title}`; 
  toDoContainer.appendChild(pToDo); 
};

export function addProjectDOM() {
  for (let i = 0; i < arrToDo.length; i++) {
    const pToDo = document.createElement('p'); 
    pToDo.textContent = `${arrToDo[i].title}`; 
    toDoContainer.appendChild(pToDo); 
  }; 
};

export function removeProjectDOM() {
  while (toDoContainer.firstChild) {
    toDoContainer.removeChild(toDoContainer.lastChild); 
  } 
};

export function addNewProjectHeader() {
  const newA = document.createElement('a'); 
  const projectName = prompt('Name your project'); 
  const headProjectsContainer = document.querySelector('.projects-container'); 
  const aAddProject = document.querySelector('.add-project'); 

  newA.textContent = projectName; 

  headProjectsContainer.insertBefore(newA, aAddProject); 
}