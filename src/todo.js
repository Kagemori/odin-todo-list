import "./css/todo.css";
import { shared } from "./shared.js";
import { editCard } from "./todoform.js";
import { projectTodos, selectActiveProject, saveToJson } from "./project.js";

const updateTodoContainer = (activeProjectArray) => {
    if(activeProjectArray.length > 0) {
        let todoContainer = document.querySelector("#todo-container");

        let todoCardHolder = document.createElement("div");
        todoCardHolder.setAttribute("id","todo-card-holder");

        for(let i = 0; i < activeProjectArray.length; i++){
            todoCardHolder.appendChild(
                addTodoCard(activeProjectArray[i].name, activeProjectArray[i].desc,activeProjectArray[i].date,activeProjectArray[i].priority,i)
            );
        }

        todoContainer.appendChild(todoCardHolder);
    }
}

function addTodoCard(name,desc,date,prio,index) {
    let todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");
    todoCard.setAttribute("id",index);

    let todoCardName = document.createElement("div");
    todoCardName.classList.add("todo-card-name");
    todoCardName.textContent = name;

    let todoCardDesc = document.createElement("div");
    todoCardDesc.classList.add("todo-card-desc");
    todoCardDesc.textContent = desc;

    let todoCardDate = document.createElement("div");
    todoCardDate.classList.add("todo-card-date");
    todoCardDate.textContent = `Due: ${date}`;

    let todoCardPrio = document.createElement("div");
    todoCardPrio.classList.add("todo-card-prio");
    todoCardPrio.textContent = `${prio} Priority`;

    todoCard.appendChild(todoCardName);
    todoCard.appendChild(todoCardDesc);
    todoCard.appendChild(todoCardDate);
    todoCard.appendChild(todoCardPrio);

    let todoCardOptions = document.createElement("div");
    todoCardOptions.classList.add("todo-card-options");

    let todoCardComplete = document.createElement("button");
    todoCardComplete.classList.add("todo-card-complete");
    todoCardComplete.textContent = "Finished";

    todoCardComplete.addEventListener('click', (e) => {
        let card = e.target.closest(".todo-card");
        let index = card.id;

        let currentProject = selectActiveProject(shared.activeProject);
        currentProject.completeTodo(index);
        projectTodos(shared.activeProject);


        let newForm = document.querySelector("#new-form");

        while(newForm.lastElementChild) {
            newForm.removeChild(newForm.lastElementChild);
        }

        saveToJson();
    })

    let todoCardEdit = document.createElement("button");
    todoCardEdit.classList.add("todo-card-edit");
    todoCardEdit.textContent = "Edit";

    todoCardEdit.addEventListener('click', (e) => {
        let card = e.target.closest(".todo-card");
        let index = card.id;

        console.log(`Active Project: ${shared.activeProject} || Index: ${index}`);

        editCard(shared.activeProject,index);
    })

    todoCardOptions.appendChild(todoCardComplete);
    todoCardOptions.appendChild(todoCardEdit);

    todoCard.appendChild(todoCardOptions);

    return todoCard;
}

export {updateTodoContainer}