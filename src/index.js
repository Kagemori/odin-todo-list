import { todoform } from "./todoform.js";

let newTodo = document.querySelector("#new-todo");
let newForm = document.querySelector("#new-form");

newTodo.addEventListener('click', () => {
    while(newForm.lastElementChild) {
        newForm.removeChild(newForm.lastElementChild);
    }
    todoform();
})