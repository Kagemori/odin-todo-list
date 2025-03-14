import { todoform } from "./todoform.js";
import { projectform } from "./projectform.js";
import { projectSidebar, createProject, listProjects, selectActiveProject, defaultProject} from "./project.js";
import { shared } from "./shared.js";

import "./css/styles.css";

let newTodo = document.querySelector("#new-todo");
let newProj = document.querySelector("#new-project")
let newForm = document.querySelector("#new-form");

let projSidebar = document.querySelector("#project-sidebar");

// Remove when actually saving things
localStorage.clear();

defaultProject();
projectSidebar();

newTodo.addEventListener('click', () => {
    while(newForm.lastElementChild) {
        newForm.removeChild(newForm.lastElementChild);
    }
    todoform();

    let submitTodo = document.querySelector("#submit");
    submitTodo.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Submitted Todo");
        let currentProject = selectActiveProject(shared.activeProject);
        currentProject.addTodo();
        console.log(currentProject);
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
        createProject();
        listProjects();

        while(projSidebar.lastElementChild) {
            projSidebar.removeChild(projSidebar.lastElementChild);
        }
        projectSidebar();
    })
});