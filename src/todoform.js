import "./css/todoform.css"
import { getProjectArray, selectActiveProject, projectTodos, saveToJson } from "./project.js";
import { shared } from "./shared.js";

const todoform = () => {
    let newForm = document.querySelector("#new-form");

    let newTodoFormDiv = document.createElement("div");
    newTodoFormDiv.setAttribute("id","new-todo-form");

    let newTodoForm = document.createElement("form");
    newTodoForm.setAttribute("id","todo-form");
    newTodoForm.setAttribute("action","");

    let radioButtons = document.createElement("div");
    radioButtons.setAttribute("id","radiobtns");

    // Todo Form Inputs
    newTodoForm.appendChild(
        addFormInput("Name",
            "todo-name",
            "text",
            ""
        )
    );

    newTodoForm.appendChild(
        addFormInput("Description",
            "todo-desc",
            "text",
            ""
        )
    );

    newTodoForm.appendChild(
        addFormInput("Due Date",
            "todo-date",
            "date",
            ""
        )
    );

    radioButtons.appendChild(
        addFormInput("Low",
            "todo-low",
            "radio",
            "Low"
        )
    );

    radioButtons.appendChild(
        addFormInput("Medium",
            "todo-med",
            "radio",
            "Medium"
        )
    );

    radioButtons.appendChild(
        addFormInput("High",
            "todo-high",
            "radio",
            "High"
        )
    );

    newTodoForm.appendChild(radioButtons);

    let formSection = document.createElement("div");
    formSection.classList.add("form-section");
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("id","submit");
    submitButton.textContent = "Add Todo";

    formSection.appendChild(submitButton);
    newTodoForm.appendChild(formSection);

    newTodoFormDiv.appendChild(newTodoForm);
    newForm.appendChild(newTodoFormDiv);
}

function addFormInput(labelName, id, formType, value){
    let formSection = document.createElement("div");
    formSection.classList.add("form-section");
    let formLabel = document.createElement("label");
    formLabel.setAttribute("for",id);

    if (formType !== "submit"){
        if(formType === "radio"){
            formLabel.textContent = `${labelName}`;
        }else{
            formLabel.textContent = `${labelName}:`;
        }
    }

    let formInput = document.createElement("input");
    formInput.setAttribute("type",formType);
    formInput.setAttribute("name",id);
    formInput.setAttribute("id",id);

    if (formType == "radio") {
        formInput.setAttribute("name","priority")
        formInput.setAttribute("value",value);
    }

    if (formType !== "submit"){
        if (formType === "radio"){
            formSection.appendChild(formInput);
            formSection.appendChild(formLabel);
        }else {
            formSection.appendChild(formLabel);
            formSection.appendChild(formInput);
        }
    }else{
        formSection.appendChild(formInput);
    }

    return formSection;
}

function editCard(activeProjectIndex, cardIndex){
    let activeProject = getProjectArray(activeProjectIndex);
    let todoArray = activeProject.todoList;
    let todo = todoArray[cardIndex];

    let newForm = document.querySelector("#new-form");

    let newTodoFormDiv = document.createElement("div");
    newTodoFormDiv.setAttribute("id","new-todo-form");

    let newTodoForm = document.createElement("form");
    newTodoForm.setAttribute("id","todo-form");
    newTodoForm.setAttribute("action","");

    let radioButtons = document.createElement("div");
    radioButtons.setAttribute("id","radiobtns");

    // Todo Form Inputs
    newTodoForm.appendChild(
        addRadioChecked("Name",
            "todo-name",
            "text",
            todo.name
        )
    );

    newTodoForm.appendChild(
        addRadioChecked("Description",
            "todo-desc",
            "text",
            todo.desc
        )
    );

    newTodoForm.appendChild(
        addRadioChecked("Due Date",
            "todo-date",
            "date",
            todo.date
        )
    );

    if(todo.priority == "Low"){
        radioButtons.appendChild(
            addRadioChecked("Low",
                "todo-low",
                "radio",
                "Low"
            )
        );
    }else{
        radioButtons.appendChild(
            addFormInput("Low",
                "todo-low",
                "radio",
                "Low"
            )
        );
    }
    
    if(todo.priority == "Medium"){
        radioButtons.appendChild(
            addRadioChecked("Medium",
            "todo-med",
            "radio",
            "Medium"
            )
        );
    }else{
        radioButtons.appendChild(
            addFormInput("Medium",
            "todo-med",
            "radio",
            "Medium"
            )
        );
    }

    if(todo.priority == "High"){
        radioButtons.appendChild(
            addRadioChecked("High",
            "todo-high",
            "radio",
            "High"
            )
        );
    }else{
        radioButtons.appendChild(
            addFormInput("High",
            "todo-high",
            "radio",
            "High"
            )
        );
    }

    newTodoForm.appendChild(radioButtons);

    let formSection = document.createElement("div");
    formSection.classList.add("form-section");
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("id","submit");
    submitButton.textContent = "Update Todo";

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        let currentProject = selectActiveProject(shared.activeProject);
        currentProject.updateTodo(cardIndex);
        projectTodos(shared.activeProject);

        while(newForm.lastElementChild) {
            newForm.removeChild(newForm.lastElementChild);
        }

        saveToJson();
    })

    formSection.appendChild(submitButton);
    newTodoForm.appendChild(formSection);

    newTodoFormDiv.appendChild(newTodoForm);
    newForm.appendChild(newTodoFormDiv);
}

function addRadioChecked(labelName, id, formType, value){
    let formSection = document.createElement("div");
    formSection.classList.add("form-section");
    let formLabel = document.createElement("label");
    formLabel.setAttribute("for",id);

    if (formType !== "submit"){
        if(formType === "radio"){
            formLabel.textContent = `${labelName}`;
        }else{
            formLabel.textContent = `${labelName}:`;
        }
    }

    let formInput = document.createElement("input");
    formInput.setAttribute("type",formType);
    formInput.setAttribute("name",id);
    formInput.setAttribute("id",id);
    formInput.setAttribute("value",value);

    if (formType == "radio") {
        formInput.setAttribute("name","priority")
        formInput.checked = true;
    }

    if (formType !== "submit"){
        if (formType === "radio"){
            formSection.appendChild(formInput);
            formSection.appendChild(formLabel);
        }else {
            formSection.appendChild(formLabel);
            formSection.appendChild(formInput);
        }
    }else{
        formSection.appendChild(formInput);
    }

    return formSection;
}

export {todoform, editCard}