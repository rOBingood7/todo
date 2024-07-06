// import { todos } from "../lib/db.js";
// import { reload } from "../lib/utils.js";
// import { ToDoItem } from "../components/ToDo.js"
import { todos } from "./lib/db.js"
import { reload } from "./lib/utils.js"
import { ToDoItem } from "./components/ToDo.js"

const container = document.querySelector('.container')
const form = document.querySelector('.todo')
const input = document.querySelector('.todo input')

reload(todos, ToDoItem, container)  

form.onsubmit = (e) => {
    e.preventDefault ()

    const todo = {
        id: crypto.randomUUID(),
        title: input.value,
        time: new Date().toLocaleTimeString(),
        isDone: false
    }
    todos.push(todo)
    reload(todos, ToDoItem, container)
}
