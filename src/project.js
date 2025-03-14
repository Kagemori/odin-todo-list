import { updateTodoContainer } from "./todo";
import { shared } from "./shared";

let projectDirectory = [];

class Project {
    constructor(projectName, projectDescription){
        this.projectName = projectName;
        this.projectDescription = projectDescription;
        this.todoList = [];
    }

    addTodo() {
        const name = document.getElementById("todo-name").value;
        const desc = document.getElementById("todo-desc").value;
        const date = document.getElementById("todo-date").value;
        const prio = document.querySelector('input[name="priority"]:checked').value;

        let todo = {name: name,desc: desc,date: date,priority: prio}
        this.todoList.push(todo);
    }
}

function defaultProject(){
    const projName = "Default Project";
    const projDesc = "Add more projects above";

    projectDirectory.push(new Project(projName,projDesc));
}

function createProject (){
    const projName = document.getElementById("proj-name").value;
    const projDesc = document.getElementById("proj-desc").value;

    projectDirectory.push(new Project(projName,projDesc));
}

function listProjects (){
    console.log(projectDirectory);
}

function selectActiveProject(index) {
    return projectDirectory[index];
}

const projectSidebar = () => {
    let sidebar = document.querySelector("#project-sidebar");

    let projectCardHolder = document.createElement("div");
    projectCardHolder.setAttribute("id","proj-card-holder");

    for(let i = 0; i < projectDirectory.length; i++){
        projectCardHolder.appendChild(
            addProjectCard(projectDirectory[i].projectName, projectDirectory[i].projectDescription,i)
        );
    }

    sidebar.appendChild(projectCardHolder);
}

function addProjectCard(name,desc,index){
    let projectCard = document.createElement("div");
    projectCard.classList.add("proj-card");

    let projCardName = document.createElement("div");
    projCardName.classList.add("proj-card-name");
    projCardName.textContent = name;

    let projCardDesc = document.createElement("div");
    projCardDesc.classList.add("proj-card-desc");
    projCardDesc.textContent = desc;

    projectCard.appendChild(projCardName);
    projectCard.appendChild(projCardDesc);

    projectCard.addEventListener('click', () => {
        shared.activeProject = index;

        projectTodos(shared.activeProject);
    })

    return projectCard;
}

function projectTodos(index){
    let todoContainer = document.querySelector("#todo-container");
    while(todoContainer.lastElementChild) {
        todoContainer.removeChild(todoContainer.lastElementChild);
    }

    let projectTodoArray = projectDirectory[index].todoList;
    updateTodoContainer(projectTodoArray);
}

export {projectSidebar,createProject,listProjects,selectActiveProject, defaultProject, projectTodos}