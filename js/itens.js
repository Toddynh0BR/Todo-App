import * as el from './elements.js';
import status from './status.js';

export function UpdateItens(){
 el.itens.textContent = el.TODOS.children.length;
 //status.TodosValue
}

export function removeItem(event){
 const btnDelete = event.target;
 const itemRemove1 = btnDelete.parentElement;
 const itemRemove2 = itemRemove1.parentElement;
 const itemRemove3 = itemRemove2.parentElement;
 itemRemove3.remove();

 --status.CompletedItens;
 console.log(status.CompletedItens);
 UpdateItens()
}


export function itemCompleto(event){
 const btnCheck = event.target;
 const itemCheck = btnCheck.parentElement;
 const itemCheck2 = itemCheck.parentElement;

 ++status.CompletedItens;
 console.log(status.CompletedItens);
 itemCheck2.classList.add('Completed');
}

export function itemIncompleto(event){
 const btnInCheck = event.target;
 const itemInCheck = btnInCheck.parentElement;
 const itemInCheck2 = itemInCheck.parentElement;

 --status.CompletedItens;
 console.log(status.CompletedItens);
 itemInCheck2.classList.remove('Completed');
}


export function removeCompletedTodos() {
alert('oi')
  el.todo.forEach(todo => {
      todo.classList.remove('Completed')
  });
}

el.ClearCompleted.addEventListener('click', removeCompletedTodos);

