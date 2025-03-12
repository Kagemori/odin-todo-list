import { todoform } from "./todoform.js";
import { projectform } from "./projectform.js";

import "./css/styles.css";

let newTodo = document.querySelector("#new-todo");
let newProj = document.querySelector("#new-project")
let newForm = document.querySelector("#new-form");

newTodo.addEventListener('click', () => {
    while(newForm.lastElementChild) {
        newForm.removeChild(newForm.lastElementChild);
    }
    todoform();

    let submitTodo = document.querySelector("#submit");
    submitTodo.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Submitted Todo");
    })
});

newProj.addEventListener('click', () => {
    while(newForm.lastElementChild) {
        newForm.removeChild(newForm.lastElementChild);
    }
    projectform();

    let submitProject = document.querySelector("#submit");
    submitProject.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Submitted Project");
    })
});