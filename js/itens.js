import * as el from './elements.js';
import status from './status.js';

export function UpdateItens(){
 el.itens.textContent = status.TodosValue
}

export function removeItem(event){
 const btnDelete = event.target;
 const itemRemove1 = btnDelete.parentElement;
 const itemRemove2 = itemRemove1.parentElement;
 itemRemove2.remove();
 --status.TodosValue

 UpdateItens()
}


export function itemCompleto(event){
 const btnCheck = event.target;
 const itemCheck = btnCheck.parentElement;
 const itemCheck2 = itemCheck.parentElement;

 itemCheck2.classList.toggle('Completed');
}



