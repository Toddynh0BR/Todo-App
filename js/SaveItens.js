import { addEventListeners } from "./itens.js";
import { UpdateItens } from "./itens.js";

document.addEventListener("DOMContentLoaded", () => {
  loadItems();

  window.addEventListener("beforeunload", saveItems);
});



export function saveItems() {
    const todoContainer = document.getElementById('TODOS');
    const todos = todoContainer.innerHTML;
    localStorage.setItem('TODOS', JSON.stringify(todos));
}

function loadItems() {
    const todos = JSON.parse(localStorage.getItem('TODOS')) || [];

    if (todos) {
        const todoContainer = document.getElementById('TODOS');
        todoContainer.innerHTML = todos;
    }

    addEventListeners()
    UpdateItens()
}
     
window.onload = loadTodos;