import "./css/todoform.css"

const todoform = () => {
    let newForm = document.querySelector("#new-form");

    let newTodoFormDiv = document.createElement("div");
    newTodoFormDiv.setAttribute("id","new-todo-form");

    let newTodoForm = document.createElement("form");
    newTodoForm.setAttribute("id","todo-form");

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
            "todo-due",
            "date",
            ""
        )
    );

    newTodoForm.appendChild(
        addFormInput("Low Priority",
            "todo-low",
            "radio",
            "low"
        )
    );

    newTodoForm.appendChild(
        addFormInput("Medium Priority",
            "todo-med",
            "radio",
            "med"
        )
    );

    newTodoForm.appendChild(
        addFormInput("High Priority",
            "todo-high",
            "radio",
            "high"
        )
    );

    newTodoForm.appendChild(
        addFormInput("",
            "submit",
            "submit",
            ""
        )
    );

    newTodoFormDiv.appendChild(newTodoForm);
    newForm.appendChild(newTodoFormDiv);
}

function addFormInput(labelName, id, formType, value){
    let formSection = document.createElement("div");
    formSection.classList.add("form-section");

    if (formType !== "submit"){
        let formLabel = document.createElement("label");
        formLabel.setAttribute("for",id);
        formLabel.textContent = `${labelName}:`;
        formSection.appendChild(formLabel);
    }

    let formInput = document.createElement("input");
    formInput.setAttribute("type",formType);
    formInput.setAttribute("name",id);
    formInput.setAttribute("id",id);

    if (formType == "radio") {
        formInput.setAttribute("name","priority")
        formInput.setAttribute("value",value);
    }

    formSection.appendChild(formInput);

    return formSection;
}

export {todoform}