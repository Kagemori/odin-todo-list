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

export {createProject,listProjects,selectActiveProject}