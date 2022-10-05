import { createToDo, toDoToDom } from './functions.js';

const btnCreate = document.querySelector('button'); 

btnCreate.addEventListener('click', createToDo); 
btnCreate.addEventListener('click', toDoToDom); 