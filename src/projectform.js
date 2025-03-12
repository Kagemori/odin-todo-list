import "./css/projectform.css";

const projectform = () => {
    let newForm = document.querySelector("#new-form");

    let newProjectFormDiv = document.createElement("div");
    newProjectFormDiv.setAttribute("id","new-project-form");

    let newProjectForm = document.createElement("form");
    newProjectForm.setAttribute("id","project-form");
    newProjectForm.setAttribute("action","");

    // Form Inputs
    newProjectForm.appendChild(
        addFormInput("Project Name",
            "proj-name",
            "text"
        )
    );

    newProjectForm.appendChild(
        addFormInput("Project Description",
            "proj-desc",
            "text"
        )
    );

    let formSection = document.createElement("div");
    formSection.classList.add("form-section");
    let submitButton = document.createElement("button");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("id","submit");
    submitButton.textContent = "Add Project";

    formSection.appendChild(submitButton);
    newProjectForm.appendChild(formSection);

    newProjectFormDiv.appendChild(newProjectForm);
    newForm.appendChild(newProjectFormDiv);
}

function addFormInput(labelName, id, formType){
    let formSection = document.createElement("div");
    formSection.classList.add("form-section");

    let formLabel = document.createElement("label");
    formLabel.setAttribute("for",id);
    formLabel.textContent = `${labelName}:`;
    formSection.appendChild(formLabel);

    let formInput = document.createElement("input");
    formInput.setAttribute("type",formType);
    formInput.setAttribute("name",id);
    formInput.setAttribute("id",id);

    formSection.appendChild(formInput);

    return formSection;
}

export {projectform}