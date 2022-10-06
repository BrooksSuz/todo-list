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
  for (let i = 0; i < 2; i++) {
    const newestToDo = arrToDo[arrToDo.length - 1]; 
    if (i === 0) {

      var pToDo = document.createElement('p'); 
      pToDo.textContent = `${newestToDo.title}`; 
      
      const btnRemoveToDo = document.createElement('button'); 
      btnRemoveToDo.textContent = 'Remove ToDo'; 
      btnRemoveToDo.addEventListener('click', function() {
        while (pToDo.firstChild) {
          pToDo.removeChild(pToDo.firstChild); 
        }
        toDoContainer.removeChild(pToDo); 
        btnRemoveToDo.remove(); 
      }); 
      
      toDoContainer.appendChild(pToDo); 
      pToDo.appendChild(btnRemoveToDo); 

    } else if (i === 1) {

      const pInfo = document.createElement('p'); 
      pInfo.style.color = 'transparent';
      pInfo.textContent = `${newestToDo.description}, ${newestToDo.dueDate}, ${newestToDo.priority}`; 

      const btnInfo = document.createElement('button'); 
      btnInfo.textContent = 'Show/Hide Information';
      btnInfo.addEventListener('click', function showInfo() {
        if (pInfo.style.color === 'transparent') {
          pInfo.style.color = 'white'; 
        } else if (pInfo.style.color === 'white') {
          pInfo.style.color = 'transparent'; 
        }
      });  

      pToDo.appendChild(pInfo); 
      pToDo.appendChild(btnInfo); 
      
    }
  }
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