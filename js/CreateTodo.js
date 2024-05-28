import { UpdateItens, removeItem, itemCompleto, itemIncompleto, addEventListeners } from './itens.js';
import * as el from './elements.js';




function CreateTodo() {
    const div = document.createElement('div');
    div.innerHTML = `
    <div id="TODO" class="">
            <div class="circle ">
              <img src="assets/favicon-32x32.png" alt="check" class="check">
            </div>
            <div class="circle2 ">
              <img src="assets/icon-check.svg" alt="check" class="inCheck">
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
     if (el.Input.value=== ""){
      return
     }
      
     const row = CreateTodo()
     
     row.querySelector('#MyTodo').textContent = el.Input.value;
     row.querySelector('.check').addEventListener('click', itemCompleto);
     row.querySelector('.inCheck').addEventListener('click', itemIncompleto);
     row.querySelector('#Delete').addEventListener('click', removeItem);
    


     el.TODOS.appendChild(row)

     UpdateItens()

     el.Input.value = ""
});





