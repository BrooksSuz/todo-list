import { createToDo, toDoToDom, removeProjectDOM, addNewProjectHeader } from './functions.js';

const btnCreate = document.querySelector('button'); 
const aDefault = document.querySelector('.default-project'); 
const aAddProject = document.querySelector('.add-project'); 

btnCreate.addEventListener('click', createToDo); 
btnCreate.addEventListener('click', toDoToDom); 

aDefault.addEventListener('click', removeProjectDOM); 

aAddProject.addEventListener('click', addNewProjectHeader); 