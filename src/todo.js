import "./css/todo.css";

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

    // todoCard.addEventListener('click', () => {
    // })

    return todoCard;
}

export {updateTodoContainer}