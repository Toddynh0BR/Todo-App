import { UpdateItens, removeItem, itemCompleto } from './itens.js';
import * as el from './elements.js'
import status from './status.js'

function CreateTodo() {
    const div = document.createElement('div');
    div.innerHTML = `
      <div id="TODO" class="">
        <div class="circle" id="circle">
          <img src="assets/icon-check.svg" alt="check" class="check">
        </div>
        <div class="TODOandDelete">
          <span id="MyTodo"></span>
          <img src="assets/icon-cross.svg" alt="X" id="Delete">
        </div>
      </div>
    `;
    return div
  }
  
el.Input.addEventListener('keypress', (event) => {
     if (event.key !='Enter') {
        return
     }
      
     const row = CreateTodo()
     row.querySelector('#MyTodo').textContent = el.Input.value;
     row.querySelector('#circle').addEventListener('click', itemCompleto);
     row.querySelector('#Delete').addEventListener('click', removeItem);
     el.TODOS.appendChild(row)

     ++status.TodosValue
     UpdateItens()
     el.Input.value = ""
});
