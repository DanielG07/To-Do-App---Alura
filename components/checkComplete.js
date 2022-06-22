const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", (event) => completeTask(event,id));
    return i;
}

const completeTask = (event, id) => {
    const elemento = event.target;
    elemento.classList.toggle("fas");
    elemento.classList.toggle("completeIcon")
    elemento.classList.toggle("far");
    
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex((item) => item.id == id);

    tasks[index]['complete'] = !tasks[index]['complete'];
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export default checkComplete;