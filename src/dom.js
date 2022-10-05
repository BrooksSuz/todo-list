import { createToDo, toDoToDom, addProjectDOM, removeProjectDOM } from './functions.js';

const btnCreate = document.querySelector('button'); 
const aDefault = document.querySelector('.default-project'); 

btnCreate.addEventListener('click', createToDo); 
btnCreate.addEventListener('click', toDoToDom); 

aDefault.addEventListener('click', removeProjectDOM); 
aDefault.addEventListener('click', addProjectDOM); 