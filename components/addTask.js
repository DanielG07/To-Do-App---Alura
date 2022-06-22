import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteIc from "./deleteIcon.js";
import { displayTask } from "./readTasks.js";


export const addTask = (event) => {
    event.preventDefault();

    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if(value == "" || date == ""){
        return;
    }

    input.value = "";
    calendar.value = "";

    const complete = false;

    const taskObject = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    }

    list.innerHTML = "";

    taskList.push(taskObject);
    localStorage.setItem("tasks", JSON.stringify(taskList));

    displayTask();
}

export const createTask = ({value, dateFormat, complete, id}) => {

    const task = document.createElement("li");
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    const dateElement = document.createElement("span");
    const check = checkComplete(id);

    if(complete) {
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon")
        check.classList.toggle("far");
    }

    task.classList.add("card");
    titleTask.classList.add("task");

    titleTask.innerText = value;
    dateElement.innerHTML = dateFormat;

    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);
    
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIc(id));
    
    return task;
}